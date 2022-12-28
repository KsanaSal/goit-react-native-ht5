import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useEffect, useCallback, useState } from "react";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    });
    // const [dimensionsWidth, setDimensionsWidth] = useState(
    //     Dimensions.get("window").width
    // );
    // console.log(dimensionsWidth);
    // useEffect(() => {
    //     const onChange = () => {
    //         const width = Dimensions.get("window").width;

    //         setDimensionsWidth(width);
    //     };
    //     Dimensions.addEventListener("change", onChange);
    //     return () => {
    //         Dimensions.removeEventListener("change", onChange);
    //     };
    // }, []);

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

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            // resizeMode: "cover",
            justifyContent: "flex-end",
        },
    });

    return (
        <View style={styles.container} onLayout={onLayout}>
            <ImageBackground
                source={require("./assets/images/photo-background-1x.jpg")}
                style={styles.image}
            >
                {/* <RegistrationScreen /> */}
                <LoginScreen />
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}
