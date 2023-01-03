import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen";
import { useEffect, useCallback } from "react";
import LoginScreen from "./Screens/authScreens/LoginScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    });

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
                <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                    {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                    <AuthStack.Screen
                        name="Register"
                        component={RegistrationScreen}
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
