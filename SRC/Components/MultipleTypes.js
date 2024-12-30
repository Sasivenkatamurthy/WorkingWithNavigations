import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileScreen = () => (
  <View>
    <Text>Profile</Text>
  </View>
);

const SettingsScreen = () => (
  <View>
    <Text>Settings</Text>
  </View>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const MultipleTypes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        
        }}>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MultipleTypes;
