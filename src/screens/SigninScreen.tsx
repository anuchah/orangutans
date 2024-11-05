import {Text, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../types/navigation';

type Props = RootStackScreenProps<'Signin'>;

const SigninScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <View className="flex-1 space-y-16">
      <Text className="text-indigo-900 text-2xl">Welcome</Text>
    </View>
  );
};

export default SigninScreen;
