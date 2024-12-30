import { View, Text, Button } from 'react-native'
import React from 'react'
import HomeDrawer from './HomeDrawer'
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
const SettingsDrawer = ({navigation}) => {
  return (
    <View>
      <Text>SettingsDrawer</Text>
      <Button title='Back Home' onPress={()=>navigation.navigate(HomeDrawer)} />
    </View>
  )
}

export default SettingsDrawer