import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const hospitals = [
  {
    id: '1',
    name: 'City Hospital',
    description: 'A modern hospital with all the latest medical technology.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Sunshine Medical Center',
    description: 'A community hospital providing excellent care to all patients.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Greenfield Hospital',
    description: 'Specialized in emergency services and trauma care.',
    image: 'https://via.placeholder.com/150',
  },
];

const HospitalsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hospitalCard}>
            <Image source={{ uri: item.image }} style={styles.hospitalImage} />
            <View style={styles.hospitalInfo}>
              <Text style={styles.hospitalName}>{item.name}</Text>
              <Text style={styles.hospitalDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f3f4f6',
  },
  hospitalCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 5, // Add subtle shadow for Android
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    overflow: 'hidden', // Ensure image corners don't overlap
  },
  hospitalImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#e0e0e0', // Slight border for image
  },
  hospitalInfo: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'center',
  },
  hospitalName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  hospitalDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginTop: 5,
    fontStyle: 'italic', // Makes description text feel lighter
  },
});

export default HospitalsScreen;
