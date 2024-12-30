import { View, Text, Button } from 'react-native'
import React from 'react'
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

const HomeDrawer = ({navigation}) => {
  return (
    <View>
      <Text>HomeDrawer</Text>
      <Button title='Settings' onPress={()=>navigation.navigate(SettingsDrawer)} />
    </View>
  )
}

export default HomeDrawer