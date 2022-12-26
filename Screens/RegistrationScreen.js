import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
} from "react-native";

export default function RegistrationScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <View style={styles.wrapPhoto}></View>
                <View style={styles.icon}></View>
            </View>

            <View>
                <Text style={styles.text}>Регістрація</Text>
                <View style={styles.form}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Логін"
                            placeholderTextColor="#BDBDBD"
                        />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Адреса електронної почти"
                            placeholderTextColor="#BDBDBD"
                        />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Пароль"
                            placeholderTextColor="#BDBDBD"
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                        <Text style={styles.btnTitle}>Зареєструватися</Text>
                    </TouchableOpacity>
                </View>
                <Pressable style={{ alignItems: "center" }}>
                    <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        margin: 0,
        // opacity: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
        // alignContent: "center",
        // justifyContent: "center",
    },

    wrap: { marginBottom: 32 },

    wrapPhoto: {
        position: "absolute",
        left: 128,
        top: -60,
        // alignItems: "center",
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },

    icon: {
        position: "relative",
        bottom: -20,
        left: 235,
        color: "#FF6C00",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#FF6C00",
        borderRadius: 15,
        width: 25,
        height: 25,
    },

    text: {
        marginTop: 32,
        marginBottom: 32,
        fontSize: 30,
        fontWeight: "medium",
        lineHeight: 35,
        letterSpacing: 0.01,
        textAlign: "center",
        color: "#212121",
    },

    form: {
        marginBottom: 16,
        // marginHorizontal: 16,
        // zIndex: 1,
    },

    input: {
        padding: 16,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        // placeholderTextColor: "red",

        textAlign: "left",
        fontSize: 16,
        color: "#212121",
    },

    btn: {
        backgroundColor: "#FF6C00",
        height: 50,
        borderRadius: 100,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
        // marginHorizontal: 20,
    },

    btnTitle: {
        color: "#fff",
        fontSize: 16,
    },

    linkText: {
        fontSize: 16,
        color: "#1B4371",
        alignItems: "center",
    },
});
