import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go back Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailsScreen;
