/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  Settings: undefined;
  NotFound: undefined;
  Activites: undefined;
  Virtual: undefined;
  ActionRecord: undefined;
  Course: undefined;
  CourseInfo: undefined;
  PointsReport: undefined;
  Publication: undefined;
  TitlesRecord: undefined;
  Home: undefined;
  Login: undefined;
  User: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Login: undefined;
  User: undefined;
  Activites: undefined;
  Virtual: undefined;
  Course: undefined;
  ActionRecord: undefined;
  Publication: undefined;
  TitlesRecord: undefined;
  PointsReport: undefined;
  CourseInfo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
