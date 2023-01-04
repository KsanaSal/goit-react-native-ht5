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
                    <TextInput style={styles.input} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <TextInput style={styles.input} />
                </View>
            </View>
            {/* <View style={styles.form}>
                <View style={{ marginTop: 16 }}>
                    <TextInput
                        // style={[
                        //     styles.input,
                        //     focusedEmail && {
                        //         borderColor: "#FF6C00",
                        //         backgroundColor: "#fff",
                        //     },
                        // ]}
                        placeholder="Адреса електронної почти"
                        placeholderTextColor="#BDBDBD"
                        // onFocus={() => onFocusEmail()}
                        // onBlur={() => onBlurEmail()}
                        // value={state.email}
                        // onChangeText={(value) =>
                        //     setState((prevState) => ({
                        //         ...prevState,
                        //         email: value,
                        //     }))
                        // }
                    />
                </View>
                <View style={styles.inputPassword}>
                    <TextInput
                        // style={[
                        //     styles.input,
                        //     focusedPassw && {
                        //         borderColor: "#FF6C00",
                        //         backgroundColor: "#fff",
                        //     },
                        // ]}
                        secureTextEntry={visibilityPassword}
                        placeholder="Пароль"
                        placeholderTextColor="#BDBDBD"
                        // onFocus={() => onFocusPassw()}
                        // onBlur={() => onBlurPassw()}
                        // value={state.password}
                        // onChangeText={(value) =>
                        //     setState((prevState) => ({
                        //         ...prevState,
                        //         password: value,
                        //     }))
                        // }
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    // onPress={keyboardHide}
                >
                    <Text style={styles.btnTitle}>Увійти</Text>
                </TouchableOpacity>
            </View> */}
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
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",

        textAlign: "left",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#212121",
    },
});
