"use strict";
/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
exports.__esModule = true;
var Linking = require("expo-linking");
var linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: "home"
                        }
                    },
                    Login: {
                        screens: {
                            LoginScreen: "login"
                        }
                    },
                    User: {
                        screens: {
                            UserScreen: "user"
                        }
                    },
                    Chat: {
                        screens: {
                            UserScreen: "Chat"
                        }
                    }
                }
            },
            Modal: "modal",
            Settings: "settings",
            NotFound: "*"
        }
    }
};
exports["default"] = linking;
