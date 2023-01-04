import { StyleSheet, View, Text } from "react-native";

export default function PostsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.wrapPhoto}></View>
                <View>
                    <Text style={styles.text}>Natali Romanova</Text>
                    <Text style={styles.textEmail}>email@example.com</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 32,
    },

    wrapPhoto: {
        marginRight: 8,
        width: 60,
        height: 60,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },

    text: {
        fontFamily: "Roboto-Bold",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 15,
        textAlign: "center",
        color: "#212121",
    },

    textEmail: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 13,
        textAlign: "center",
        color: "rgba(33, 33, 33, 0.8)",
    },
});
