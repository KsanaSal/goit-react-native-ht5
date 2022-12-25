import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./assets/images/photo-background-1x.jpg")}
                style={styles.image}
            >
                <Text style={styles.text}>ghfgrufg</Text>
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
        justifyContent: "center",
    },
    text: {
        color: "red",
        textAlign: "center",
        fontSize: 20,
    },
});
