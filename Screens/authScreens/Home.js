import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";

import PostsScreen from "../../Screens/mainScreens/PostsScreen";
import CreatePostsScreen from "../../Screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "../../Screens/mainScreens/ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home() {
    return (
        // <View style={styles.container}>
        <MainTab.Navigator>
            <MainTab.Screen
                name="Posts"
                component={PostsScreen}
                options={{ backgroundColor: "#red" }}
            />
            <MainTab.Screen name="Create" component={CreatePostsScreen} />
            <MainTab.Screen name="Profile" component={ProfileScreen} />
        </MainTab.Navigator>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
});
