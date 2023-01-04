import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

export default function PostsScreen() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.text}>Публікації</Text>
                <Image
                    source={require("../../assets/icon/icon-log-out.png")}
                ></Image>
            </View> */}
            
            <Text>Публікація</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        height: 88,
        width: Dimensions.get("window").width,
        paddingTop: 55,
        paddingHorizontal: 16,
        paddingBottom: 10,
        borderWidth: 1,
        // paddingHorizontal: 16,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: "0px 0.5px 0px",
        backgroundColor: "#fff",
        // flex: 1,
        // justifyContent: "center",
        // backgroundColor: "#ffffff",
    },

    text: {
        // marginTop: 55,
        marginRight: 130,
        fontFamily: "Roboto-Medium",
        fontWeight: "medium",
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41,
        textAlign: "center",
        color: "#212121",
    },
});
