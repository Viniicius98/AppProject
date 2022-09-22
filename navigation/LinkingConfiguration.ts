/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

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
          Course: {
            screens: {
             CourseScreen: "Course",
            },
          },
          ActionRecord: {
            screens: {
              ActionRecordScreen: "ActionRecord",
            },
          },
          Publication: {
            screens: {
              PublicationScreen: "Publication",
            },
          },
          TitlesRecord: {
            screens: {
              TitlesRecordScreen: "TitlesRecord",
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
