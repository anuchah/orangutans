import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';

export type RootStackParamList = {
  Signup: undefined;
  Signin: undefined;
  App: NavigatorScreenParams<AppStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AppStackParamList = {
  Home: undefined;
};

export type AppScreenProps<T extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
