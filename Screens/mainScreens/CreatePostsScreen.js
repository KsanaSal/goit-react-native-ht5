import { StyleSheet, View, Text } from "react-native";

export default function CreatePostsScreen() {
    return (
        <View style={styles.container}>
            <Text>Створити публікацію</Text>
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
