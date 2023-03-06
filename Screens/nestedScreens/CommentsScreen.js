import { StyleSheet, Text, View } from "react-native";

const CommentsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CommentsScreen</Text>
        </View>
    );
};

export default CommentsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
