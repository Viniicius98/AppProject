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
              LoginScreen: "Login",
            },
          },
          Home: {
            screens: {
              HomeScreen: "Home",
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
              UserScreen: "User",
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
export default linking;
