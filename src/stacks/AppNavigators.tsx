import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigators;
