import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
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
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    // text: {
    //     color: "red",
    //     textAlign: "center",
    //     fontSize: 20,
    // },
});
