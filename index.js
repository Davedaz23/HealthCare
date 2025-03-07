/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import messaging from '@react-native-firebase/messaging';
import { app } from './src/config/firebase';// Ensure this is correctly imported
import App from './App';
import { name as appName } from './app.json';

// Ensure Firebase is initialized before handling background messages
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log('🚨 Background Notification:', remoteMessage);
// });

AppRegistry.registerComponent(appName, () => App);
