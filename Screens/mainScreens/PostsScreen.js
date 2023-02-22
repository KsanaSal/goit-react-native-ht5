import { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from "react-native";

export default function PostsScreen({ route, navigation }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (route.params) {
            setPosts((prev) => [...prev, route.params]);
        }
    }, [route.params]);
    console.log(posts);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.wrapPhoto}></View>
                <View>
                    <Text style={styles.text}>Natali Romanova</Text>
                    <Text style={styles.textEmail}>email@example.com</Text>
                </View>
            </View>
            <FlatList
                data={posts}
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={({ item }) => (
                    <View style={styles.wrapperContent}>
                        <Image
                            source={{ uri: item.photo }}
                            style={{
                                width: 350,
                                height: 240,
                                borderRadius: 10,
                            }}
                        />
                        <View
                            style={{
                                width: 350,
                                marginTop: 8,
                                display: "flex",
                            }}
                        >
                            <Text style={styles.namePhoto}>
                                {item.state.name}
                            </Text>
                        </View>

                        <View
                            style={{
                                width: 350,
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Comments")
                                    }
                                >
                                    <Image
                                        source={require("../../assets/icon/icon-message-circle.png")}
                                        name="message-circle"
                                        size={24}
                                        color="#BDBDBD"
                                        marginRight={6}
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={{ fontSize: 16, color: "#BDBDBD" }}
                                >
                                    0
                                </Text>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate(
                                            "Map",
                                            item.location
                                        )
                                    }
                                >
                                    <Image
                                        source={require("../../assets/icon/icon-map-pin.png")}
                                        name="location-outline"
                                        size={24}
                                        color="#BDBDBD"
                                        marginRight={4}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.namePhoto}>
                                    {item.state.location}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            />
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

    wrapperContent: {
        marginBottom: 32,
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center",
    },

    namePhoto: {
        fontFamily: "Roboto-Medium",
        fontWeight: "medium",
        fontSize: 16,
        color: "#212121",
    },
});
