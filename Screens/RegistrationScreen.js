import { StyleSheet, View, Text } from "react-native";

export default function RegistrationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Registration</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 35,
        textAlign: "center",
        color: "#212121",
    },
});
