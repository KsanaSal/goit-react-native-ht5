import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
    Dimensions,
} from "react-native";

const initialState = {
    email: "",
    password: "",
};

export default function LoginScreen() {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [visibilityPassword, setVisibilityPassword] = useState(true);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassw, setFocusedPassw] = useState(false);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setState(initialState);
        setFocusedEmail(false);
        setFocusedPassw(false);
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
                source={require("../assets/images/photo-background-1x.jpg")}
                style={styles.image}
            >
                <View
                    style={{
                        ...styles.container,
                        flex: isShowKeyboard ? 0.77 : 0.65,
                    }}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <View>
                            <Text style={styles.text}>Увійти</Text>

                            <View style={styles.form}>
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
                                    <Text style={styles.btnTitle}>Увійти</Text>
                                </TouchableOpacity>
                            </View>

                            <Pressable style={{ alignItems: "center" }}>
                                <Text style={styles.linkText}>
                                    Немає акаунта? Зареєструватися
                                </Text>
                            </Pressable>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
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

    linkText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#1B4371",
        alignItems: "center",
    },
});
