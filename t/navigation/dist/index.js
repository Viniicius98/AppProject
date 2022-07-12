"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
//dependencias
var vector_icons_1 = require("@expo/vector-icons");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var native_stack_1 = require("@react-navigation/native-stack");
var React = require("react");
var react_native_1 = require("react-native");
//screens
var Chat_1 = require("../screens/Chat");
var HomeScreen_1 = require("../screens/HomeScreen");
var LoginScreen_1 = require("../screens/LoginScreen");
var ModalScreen_1 = require("../screens/ModalScreen");
var NotFoundScreen_1 = require("../screens/NotFoundScreen");
var SettingsScreen_1 = require("../screens/SettingsScreen");
var UserScreen_1 = require("../screens/UserScreen");
//components
var Header_1 = require("../components/Header");
//constants
var Colors_1 = require("../constants/Colors");
//hooks
var useColorScheme_1 = require("../hooks/useColorScheme");
//navigation 
var LinkingConfiguration_1 = require("./LinkingConfiguration");
function Navigation(_a) {
    var colorScheme = _a.colorScheme;
    return (React.createElement(native_1.NavigationContainer, { linking: LinkingConfiguration_1["default"], theme: colorScheme === 'dark' ? native_1.DarkTheme : native_1.DefaultTheme },
        React.createElement(RootNavigator, null)));
}
exports["default"] = Navigation;
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
var Stack = native_stack_1.createNativeStackNavigator();
function RootNavigator() {
    return (React.createElement(Stack.Navigator, null,
        React.createElement(Stack.Screen, { name: "Root", component: BottomTabNavigator, options: { headerShown: false } }),
        React.createElement(Stack.Screen, { name: "NotFound", component: NotFoundScreen_1["default"], options: { title: 'Oops!' } }),
        React.createElement(Stack.Group, { screenOptions: { presentation: 'modal' } },
            React.createElement(Stack.Screen, { name: "Modal", component: ModalScreen_1["default"] })),
        React.createElement(Stack.Group, { screenOptions: { presentation: 'modal' } },
            React.createElement(Stack.Screen, { name: "Settings", component: SettingsScreen_1["default"] }))));
}
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
var BottomTab = bottom_tabs_1.createBottomTabNavigator();
function BottomTabNavigator() {
    var colorScheme = useColorScheme_1["default"]();
    return (React.createElement(BottomTab.Navigator, { initialRouteName: "Login", screenOptions: {
            tabBarActiveTintColor: Colors_1["default"][colorScheme].tint,
            headerShown: true
        } },
        React.createElement(BottomTab.Screen, { name: "Login", component: LoginScreen_1["default"], options: function (_a) {
                var navigation = _a.navigation;
                return ({
                    header: function (props) { return React.createElement(Header_1["default"], null); },
                    tabBarIcon: function (_a) {
                        var color = _a.color;
                        return React.createElement(TabBarIcon, { name: "sign-in", color: color });
                    }
                });
            } }),
        React.createElement(BottomTab.Screen, { name: "Home", component: HomeScreen_1["default"], options: function (_a) {
                var navigation = _a.navigation;
                return ({
                    header: function (props) { return React.createElement(Header_1["default"], null); },
                    tabBarIcon: function (_a) {
                        var color = _a.color;
                        return React.createElement(TabBarIcon, { name: "home", color: color });
                    },
                    headerRight: function () { return (React.createElement(react_native_1.Pressable, { onPress: function () { return navigation.navigate('Modal'); }, style: function (_a) {
                            var pressed = _a.pressed;
                            return ({
                                opacity: pressed ? 0.5 : 1
                            });
                        } },
                        React.createElement(vector_icons_1.FontAwesome, { name: "info-circle", size: 25, color: Colors_1["default"][colorScheme].text, style: { marginRight: 15 } }))); }
                });
            } }),
        React.createElement(BottomTab.Screen, { name: "Chat", component: Chat_1["default"], options: function (_a) {
                var navigation = _a.navigation;
                return ({
                    title: 'Ações Educacionais',
                    header: function (props) { return React.createElement(Header_1["default"], null); },
                    tabBarIcon: function (_a) {
                        var color = _a.color;
                        return React.createElement(TabBarIcon, { name: "anchor", color: color });
                    }
                });
            } }),
        React.createElement(BottomTab.Screen, { name: "User", component: UserScreen_1["default"], options: function (_a) {
                var navigation = _a.navigation;
                return ({
                    title: 'Usuário',
                    tabBarIcon: function (_a) {
                        var color = _a.color;
                        return React.createElement(TabBarIcon, { name: "user", color: color });
                    },
                    headerRight: function () { return (React.createElement(react_native_1.Pressable, { onPress: function () { return navigation.navigate('Settings'); }, style: function (_a) {
                            var pressed = _a.pressed;
                            return ({
                                opacity: pressed ? 0.5 : 1
                            });
                        } },
                        React.createElement(vector_icons_1.FontAwesome, { name: "cog", size: 25, color: Colors_1["default"][colorScheme].text, style: { marginRight: 15 } }))); }
                });
            } })));
}
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
    return React.createElement(vector_icons_1.FontAwesome, __assign({ size: 30, style: { marginBottom: -3 } }, props));
}
/*<BottomTab.Screen
        name="Chat"
        component={Chat}
        options={({ navigation }: RootTabScreenProps<'Chat'>) => ({
          title: 'Chat',
          tabBarIcon: ({ color }) => <TabBarIcon name="anchor" color={color} />,
        })}
      />*/ 
