import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <ImageBackground
            source={require("../../assets/images/photo-background-1x.jpg")}
            style={styles.image}
        >
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <View style={styles.wrapPhoto}></View>
                    <View style={styles.wrapIcon}>
                        <Image
                            source={require("../../assets/icon/icon-plus.png")}
                        ></Image>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Image
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                alignContent: "flex-end",
                            }}
                            source={require("../../assets/icon/icon-log-out.png")}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Natali Romanova</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.85,
        bottom: 0,
        margin: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
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
        justifyContent: "flex-end",
    },

    wrap: { marginBottom: 32, display: "flex", alignItems: "flex-end" },

    wrapPhoto: {
        position: "absolute",
        left: 128,
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },

    wrapIcon: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        bottom: -20,
        left: -140,
        color: "#FF6C00",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#FF6C00",
        borderRadius: 15,
        width: 25,
        height: 25,
    },

    text: {
        fontFamily: "Roboto-Medium",
        fontWeight: "medium",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: 0.01,
        color: "#212121",
    },
});
