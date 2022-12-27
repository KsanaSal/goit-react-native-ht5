import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./assets/images/photo-background-1x.jpg")}
                style={styles.image}
            >
                <RegistrationScreen />
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
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
