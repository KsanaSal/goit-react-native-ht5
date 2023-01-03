import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
    Image,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
    Dimensions,
} from "react-native";

const initialState = {
    login: "",
    email: "",
    password: "",
};

export default function RegistrationScreen({ navigation }) {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [visibilityPassword, setVisibilityPassword] = useState(true);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassw, setFocusedPassw] = useState(false);
    const [focusedLogin, setFocusedLogin] = useState(false);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setState(initialState);
        setFocusedEmail(false);
        setFocusedPassw(false);
        setFocusedLogin(false);
    };

    const onFocusLogin = () => {
        setIsShowKeyboard(true);
        setFocusedLogin(true);
    };

    const onBlurLogin = () => {
        setFocusedLogin(false);
    };

    const onFocusEmail = () => {
        setIsShowKeyboard(true);
        setFocusedEmail(true);
    };

    const onBlurEmail = () => {
        setFocusedEmail(false);
    };

    const onFocusPassw = () => {
        setIsShowKeyboard(true);
        setFocusedPassw(true);
    };

    const onBlurPassw = () => {
        setFocusedPassw(false);
    };

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <ImageBackground
                source={require("../../assets/images/photo-background-1x.jpg")}
                style={styles.image}
            >
                <View
                    style={{
                        ...styles.containerRegister,
                        flex: isShowKeyboard ? 0.8 : 0.62,
                        // width: dimensions,
                    }}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <View style={styles.wrap}>
                            <View style={styles.wrapPhoto}></View>
                            <View style={styles.wrapIcon}>
                                <Image
                                    source={require("../../assets/icon/icon-plus.png")}
                                ></Image>
                            </View>
                        </View>

                        <View>
                            <Text style={styles.text}>Регістрація</Text>

                            <View style={styles.form}>
                                <View>
                                    <TextInput
                                        style={[
                                            styles.input,
                                            focusedLogin && {
                                                borderColor: "#FF6C00",
                                                backgroundColor: "#fff",
                                            },
                                        ]}
                                        placeholder="Логін"
                                        placeholderTextColor="#BDBDBD"
                                        onFocus={() => onFocusLogin()}
                                        onBlur={() => onBlurLogin()}
                                        value={state.login}
                                        onChangeText={(value) =>
                                            setState((prevState) => ({
                                                ...prevState,
                                                login: value,
                                            }))
                                        }
                                    />
                                </View>
                                <View style={{ marginTop: 16 }}>
                                    <TextInput
                                        style={[
                                            styles.input,
                                            focusedEmail && {
                                                borderColor: "#FF6C00",
                                                backgroundColor: "#fff",
                                            },
                                        ]}
                                        placeholder="Адреса електронної почти"
                                        placeholderTextColor="#BDBDBD"
                                        onFocus={() => onFocusEmail()}
                                        onBlur={() => onBlurEmail()}
                                        value={state.email}
                                        onChangeText={(value) =>
                                            setState((prevState) => ({
                                                ...prevState,
                                                email: value,
                                            }))
                                        }
                                    />
                                </View>
                                <View
                                    style={styles.inputPassword}
                                    floatingLabel
                                >
                                    <TextInput
                                        style={[
                                            styles.input,
                                            focusedPassw && {
                                                borderColor: "#FF6C00",
                                                backgroundColor: "#fff",
                                            },
                                        ]}
                                        secureTextEntry={visibilityPassword}
                                        placeholder="Пароль"
                                        placeholderTextColor="#BDBDBD"
                                        onFocus={() => onFocusPassw()}
                                        onBlur={() => onBlurPassw()}
                                        value={state.password}
                                        onChangeText={(value) =>
                                            setState((prevState) => ({
                                                ...prevState,
                                                password: value,
                                            }))
                                        }
                                    />
                                    <Text
                                        style={styles.textBtn}
                                        onPress={() =>
                                            setVisibilityPassword(
                                                !visibilityPassword
                                            )
                                        }
                                    >
                                        {visibilityPassword
                                            ? "Показати"
                                            : "Приховати"}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.btn}
                                    onPress={keyboardHide}
                                >
                                    <Text style={styles.btnTitle}>
                                        Зареєструватися
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}
                            >
                                <Text style={styles.linkText}>
                                    Вже є акаунт?
                                </Text>
                                <Pressable
                                    style={styles.linkBtn}
                                    onPress={() => navigation.navigate("Login")}
                                >
                                    <Text style={styles.linkText}>Увійти</Text>
                                </Pressable>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    containerRegister: {
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
        // resizeMode: "cover",
        justifyContent: "flex-end",
    },

    wrap: { marginBottom: 32 },

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
        left: 233,
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
        fontFamily: "Roboto-Medium",
        fontWeight: "medium",
        lineHeight: 35,
        letterSpacing: 0.01,
        textAlign: "center",
        color: "#212121",
    },

    textBtn: {
        position: "absolute",
        right: 16,
        top: 12,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#1B4371",
    },

    form: {
        marginBottom: 16,
    },

    inputPassword: { marginTop: 16 },

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

    btn: {
        backgroundColor: "#FF6C00",
        height: 50,
        borderRadius: 100,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    btnTitle: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
    },

    linkBtn: {
        alignItems: "center",
        marginLeft: 4,
        borderBottomWidth: 1,
        borderColor: "#1B4371",
    },

    linkText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#1B4371",
        alignItems: "center",
    },
});
