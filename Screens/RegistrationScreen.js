import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function RegistrationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Регістрація</Text>
            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
                    <TextInput style={styles.input} textAlign={"center"} />
                </View>
                <View>
                    <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
                    <TextInput style={styles.input} textAlign={"center"} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.inputTitle}>PASSWORD</Text>
                    <TextInput
                        style={styles.input}
                        textAlign={"center"}
                        secureTextEntry={true}
                    />
                </View>
                <Button title="SIGN IN" />
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
    },

    text: {
        marginBottom: 32,
        fontSize: 30,
        fontWeight: "medium",
        lineHeight: 35,
        letterSpacing: 0.01,
        textAlign: "center",
        color: "#212121",
    },

    form: {
        marginHorizontal: 10,
        zIndex: 1,
    },

    inputTitle: {
        color: "red",
        marginBottom: 10,
        fontSize: 18,
    },

    input: {
        zIndex: 2,
        borderWidth: 1,
        borderColor: "red",
        height: 40,
        borderRadius: 6,

        color: "#f0f8ff",
    },
});
