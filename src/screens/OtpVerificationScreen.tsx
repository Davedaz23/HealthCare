import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import firestore from '@react-native-firebase/firestore'; // Firestore instance

type OtpNavigationProp = StackNavigationProp<RootStackParamList, 'OtpVerification'>;

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const navigation = useNavigation<OtpNavigationProp>();
  const { phone } = route.params as { phone: string };

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setError('OTP cannot be empty');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Fetch the OTP document from Firestore
      const otpDocRef = firestore().collection('phoneotps').doc(phone);
      const otpDocSnap = await otpDocRef.get();

      if (!otpDocSnap.exists) {
        setError('Invalid OTP. Please try again.');
        setLoading(false);
        return;
      }

      const otpData = otpDocSnap.data();
      const storedOtp = otpData?.otp;
      const expireTime = otpData?.expireTime.toDate(); // Convert Firestore timestamp
      const currentTime = new Date();

      // Debugging logs
      console.log("Phone:", phone);
      console.log("Stored OTP:", storedOtp);
      console.log("Entered OTP:", otp);
      console.log("Expire Time:", expireTime);
      console.log("Current Time:", currentTime);
      // Validate OTP and expiration time
      if (parseInt(storedOtp, 10) === parseInt(otp, 10) && expireTime > currentTime) {
        Alert.alert('Success', 'OTP Verified Successfully!');

        // Delete OTP from Firestore after successful verification
        await otpDocRef.delete();

        // Navigate to AppointmentList after verification
        navigation.replace('AppointmentList');
      } else {
        setError('Invalid or expired OTP. Please request a new one.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('OTP Verification Error:', err);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP sent to {phone}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
        maxLength={6}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <Button title="Verify OTP" onPress={handleVerifyOtp} disabled={loading} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default OtpVerificationScreen;
