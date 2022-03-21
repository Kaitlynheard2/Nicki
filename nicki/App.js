import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar } from './screens/calendar';
import { Dashboard } from './screens/dashboard';
import { Profile } from './screens/profile';

import { Card } from 'react-native-paper';

const Tab = createBottomTabNavigator();
const homeActive = require('./assets/images/homeActive.png');
const homeInactive = require('./assets/images/homeInactive.png')

export default function App() {
  return (
    <NavigationContainer>
      <View style={[styles.container, styles.navWrapper]}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? './assets/images/homeActive.png'
                  : homeInactive;
              }
              return <Image name={iconName} color={color} size={size} />
            },
          })}>
          <Tab.Screen name="Calendar" component={Calendar} />
          <Tab.Screen name="Home" component={Dashboard} />
          <Tab.Screen name="Profiile" component={Profile} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EBF3FA',
    padding: 8,
  },
  navWrapper: {
    paddingBottom: 50,
  },
});
