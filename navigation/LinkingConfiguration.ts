/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

7;
import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              LoginScreen: "login",
            },
          },
          Home: {
            screens: {
              HomeScreen: "home",
            },
          },
          Activites: {
            screens: {
              ActivitesScreen: "Activites",
            },
          },
          Record: {
            screens: {
              RecordScreen: "Record",
            },
          },
          PointsReport: {
            screens: {
              RecordScreen: "PointsReport",
            },
          },
          User: {
            screens: {
              UserScreen: "user",
            },
          },
        },
      },
      Modal: "modal",
      Settings: "settings",
      NotFound: "*",
    },
  },
};
