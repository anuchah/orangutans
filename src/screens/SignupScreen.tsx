import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../types/navigation';

type Props = RootStackScreenProps<'Signup'>;

const SignupScreen: React.FC<Props> = ({navigation, route}) => {
  function navigateToSignup() {
    navigation.goBack();
  }
  return (
    <View className="flex-1 items-center justify-center p-4">
      <TouchableOpacity
        className="w-80 bg-indigo-800 p-4 items-center rounded-2xl shadow-lg"
        onPress={navigateToSignup}>
        <Text className="text-white uppercase">Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
