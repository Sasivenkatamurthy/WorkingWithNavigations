import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './HomeDrawer';
import SettingsDrawer from './SettingsDrawer';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

const Drawer =createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home"  component={HomeDrawer}/>
            <Drawer.Screen name="Settings" component={SettingsDrawer}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigation