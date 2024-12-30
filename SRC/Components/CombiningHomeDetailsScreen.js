// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';
// import { Text } from 'react-native';

// const Stack = createNativeStackNavigator();

// export default function CombiningHomeDetailsScreen() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          gestureEnabled: true,
        }}>
        <Tab.Screen
          options={{
            animationTypeForReplace: 'pop',
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
