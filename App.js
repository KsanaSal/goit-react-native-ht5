import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useEffect, useCallback } from "react";
import LoginScreen from "./Screens/LoginScreen";

const Stack = createStackNavigator();

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
            {/* <ImageBackground
                source={require("./assets/images/photo-background-1x.jpg")}
                style={styles.image}
            > */}
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                    {/* <Stack.Screen
                        name="Register"
                        component={RegistrationScreen}
                    /> */}
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <RegistrationScreen /> */}
            {/* <LoginScreen /> */}
            {/* </ImageBackground> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignContent: "center",
        // justifyContent: "center",
        // alignItems: "center",
        // textAlign: "center",
    },
});
