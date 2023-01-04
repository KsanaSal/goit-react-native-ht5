import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useEffect, useCallback } from "react";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen";
import LoginScreen from "./Screens/authScreens/LoginScreen";
import Home from "./Screens/authScreens/Home";
// import PostsScreen from "./Screens/mainScreens/PostsScreen";
// import CreatePostsScreen from "./Screens/mainScreens/CreatePostsScreen";
// import ProfileScreen from "./Screens/mainScreens/ProfileScreen";

const AuthStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();

// const useRoute = (isAuth) => {
//     if (!isAuth) {
//         return (
//             <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//                 <AuthStack.Screen
//                     name="Register"
//                     component={RegistrationScreen}
//                     options={{ test: "test" }}
//                 />
//                 <AuthStack.Screen name="Login" component={LoginScreen} />
//             </AuthStack.Navigator>
//         );
//     }
//     return (
//         <MainTab.Navigator>
//             <MainTab.Screen name="Posts" component={PostsScreen} />
//             <MainTab.Screen name="Create" component={CreatePostsScreen} />
//             <MainTab.Screen name="Profile" component={ProfileScreen} />
//         </MainTab.Navigator>
//     );
// };

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    });

    // const routing = useRoute(false);

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayout = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayout}>
            <NavigationContainer>
                <AuthStack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="Login"
                >
                    <AuthStack.Screen name="Home" component={Home} />
                    <AuthStack.Screen
                        name="Register"
                        component={RegistrationScreen}
                        options={{ test: "test" }}
                    />
                    <AuthStack.Screen name="Login" component={LoginScreen} />
                </AuthStack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
