import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

export default function CreatePostsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <View style={styles.wrapPhoto}>
                        <View style={styles.wrapIcon}>
                            <Image
                                source={require("../../assets/icon/icon-camera.png")}
                                style={styles.icon}
                            ></Image>
                        </View>
                    </View>
                    <Text style={styles.text}>Загрузити фото</Text>
                </View>
            </View>
            <View style={styles.form}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Назва ..."
                        placeholderTextColor="#BDBDBD"
                    />
                </View>
                <View style={styles.inputWrap}>
                    <Image
                        source={require("../../assets/icon/icon-map-pin.png")}
                    ></Image>
                    <TextInput
                        style={{
                            ...styles.input,
                            borderBottomWidth: 0,
                        }}
                        placeholder="Місцевість ..."
                        placeholderTextColor="#BDBDBD"
                    />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Публікувати</Text>
                </TouchableOpacity>
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

    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 32,
    },

    wrapPhoto: {
        marginRight: 8,
        width: 343,
        height: 240,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderColor: "#E8E8E8",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    wrapIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    icon: {
        width: 24,
        height: 24,
    },

    text: {
        marginTop: 8,
        fontFamily: "Roboto-Regular",
        fontWeight: "regular",
        fontSize: 16,
        lineHeight: 15,
        textAlign: "left",
        color: "#BDBDBD",
    },

    textEmail: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 13,
        textAlign: "center",
        color: "rgba(33, 33, 33, 0.8)",
    },

    form: {
        marginTop: 32,
    },

    input: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        backgroundColor: "#fff",

        textAlign: "left",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#212121",
    },

    inputWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
    },

    btn: {
        backgroundColor: "#F6F6F6",
        height: 50,
        borderRadius: 100,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
    },
});
