import React, { useState } from "react";
import { AutoFocus, Camera } from "expo-camera";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import * as Location from "expo-location";

const initialState = {
    name: "",
    location: "",
    isPublishActive: false,
};

export default function CreatePostsScreen({ navigation }) {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    // const [focusedName, setFocusedName] = useState("");
    const [location, setLocation] = useState(null);
    // const [isPublishActive, setIsPublishActive] = useState(false);

    const takePhoto = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Permission to access location was denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        // const location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });
        const photo = await camera.takePictureAsync();
        if (photo.uri) {
            setPhoto(photo.uri);
        }

        console.log(location);
    };

    const keyboardHide = () => {
        console.log(isShowKeyboard);
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        // setState(initialState);
        // setFocusedName(false);
        // setFocusedPassw(false);
    };

    const onFocusName = () => {
        setIsShowKeyboard(true);
        // setFocusedName(true);
    };

    // const onBlurName = () => {
    //     setFocusedName(false);
    // };

    const onFocusLocation = () => {
        setIsShowKeyboard(true);
        // setFocusedName(true);
    };

    const sendPhoto = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        if (photo && location && state) {
            console.log("second");
            setIsShowKeyboard(false);
            setPhoto(null);
            setLocation(null);
            setState(initialState);
            navigation.navigate("DefaultScreen", { photo, location, state });
        }
        console.log("first", location);
    };

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.wrapCamera} onPress={keyboardHide}>
                        <Camera
                            style={styles.camera}
                            onPress={keyboardHide}
                            ref={setCamera}
                        >
                            {photo && (
                                <View style={styles.wrapPhoto}>
                                    <Image source={{ uri: photo }} />
                                </View>
                            )}
                            <TouchableOpacity
                                style={styles.wrapIcon}
                                onPress={takePhoto}
                            >
                                <Image
                                    source={require("../../assets/icon/icon-camera.png")}
                                    style={styles.icon}
                                ></Image>
                            </TouchableOpacity>
                        </Camera>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.text}>Загрузити фото</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View
                        style={{
                            ...styles.form,
                            marginTop: isShowKeyboard ? -85 : 32,
                        }}
                    >
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Назва ..."
                                placeholderTextColor="#BDBDBD"
                                onFocus={() => onFocusName()}
                                // onBlur={() => onBlurName()}
                                value={state.name}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        name: value,
                                        isPublishActive:
                                            value && state.location,
                                    }))
                                }
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
                                onFocus={() => onFocusLocation()}
                                // onBlur={() => onBlurName()}
                                value={state.location}
                                onChangeText={(value) =>
                                    setState((prevState) => ({
                                        ...prevState,
                                        location: value,
                                        isPublishActive: value && state.name,
                                    }))
                                }
                            />
                        </View>
                        <TouchableOpacity
                            style={{
                                ...styles.btn,
                                backgroundColor: state.isPublishActive
                                    ? "#FF6C00"
                                    : "#F6F6F6",
                            }}
                            onPress={sendPhoto}
                            disabled={!state.isPublishActive}
                        >
                            <Text
                                style={{
                                    ...styles.text,
                                    color: state.isPublishActive
                                        ? "#fff"
                                        : "#BDBDBD",
                                }}
                            >
                                Публікувати
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
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
        marginTop: 32,
        textAlign: "right",
    },

    wrapCamera: {
        height: 270,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 2,
        overflow: "hidden",
    },

    camera: {
        width: "100%",
        height: 270,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "red",
    },

    wrapPhoto: {
        position: "absolute",
        marginRight: 8,
        width: 340,
        height: 240,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderColor: "#E8E8E8",
        borderWidth: 1,
    },

    wrapIcon: {
        zIndex: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
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
        color: "#BDBDBD",
    },

    form: {
        marginTop: 32,
        backgroundColor: "#fff",
    },

    input: {
        zIndex: 20,
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
