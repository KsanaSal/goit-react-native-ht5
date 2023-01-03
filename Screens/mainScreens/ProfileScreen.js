import { StyleSheet, View, Text } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Мій профіль</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
});
