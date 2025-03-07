import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignupScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import ProfileScreen from '../screens/ProfileScreen'; // Updated import
import AppointmentsListScreen from '../screens/AppointmentListScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import HospitalsScreen from '../screens/HospitalsScreen';
import MainScreen from '../screens/MainScreen';

export type RootStackParamList = {
  Home: undefined;
  Appointment: undefined;
  Profile: undefined; // Updated from Details
  AppointmentList: undefined;
  Main: undefined;
  OtpVerification: { phone: string; confirmation: any };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const FooterTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FD5F20', // Your brand color
      tabBarInactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen
      name="Main"
      component={MainScreen}
      options={{
        tabBarLabel: 'Care4You',
        tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="AppointmentList"
      component={AppointmentsListScreen}
      options={{
        tabBarLabel: 'My Appointments',
        tabBarIcon: ({ color, size }) => <Icon name="list" size={size} color={color} />,
      }}
    />
   <Tab.Screen
      name="Hospitals"
      component={HospitalsScreen} // Change to HospitalsScreen
      options={{
        tabBarLabel: 'Hospitals',
        tabBarIcon: ({ color, size }) => (
          <Icon name="hospital-o" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile" // Updated from "Details"
      component={ProfileScreen} // Updated component
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => <Icon name="user" size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerStyle: { backgroundColor: '#FD5F20' }, // Your brand color
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} options={{ title: 'OTP Verification' }} />
        
        {/* Main screen stack with footer tabs */}
        <Stack.Screen
          name="AppointmentList"
          component={FooterTabs}
          options={{ headerShown: false }} // Hide the header for the footer tab screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
