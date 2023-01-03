import { StyleSheet, View, Text } from "react-native";

export default function PostsScreen() {
    return (
        <View style={styles.container}>
            <Text>Публікація</Text>
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
