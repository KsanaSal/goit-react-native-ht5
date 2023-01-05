import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image } from "react-native";

import PostsScreen from "../../Screens/mainScreens/PostsScreen";
import CreatePostsScreen from "../../Screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "../../Screens/mainScreens/ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home({ navigation }) {
    return (
        <MainTab.Navigator
            screenOptions={{
                tabBarStyle: {
                    paddingBottom: 24,
                    paddingTop: 8,
                    height: 80,
                    shadowColor: "rgba(0, 0, 0, 0.3)",
                    shadowOffset: "0px -0.5px 0px",
                },
                headerStyle: {
                    shadowColor: "rgba(0, 0, 0, 0.3)",
                    shadowOffset: "0px -0.5px 0px",
                },
            }}
        >
            <MainTab.Screen
                name="Post"
                component={PostsScreen}
                options={{
                    headerTitle: "Публікації",
                    headerTitleStyle: {
                        color: "#212121",
                        fontSize: 18,
                        fontFamily: "Roboto-Medium",
                        fontWeight: "medium",
                    },
                    headerRight: () => {
                        const img = require("../../assets/icon/icon-log-out.png");
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Image source={img}></Image>
                            </TouchableOpacity>
                        );
                    },
                    headerTitleAlign: "center",
                    headerRightContainerStyle: { paddingHorizontal: 16 },
                    tabBarShowLabel: false,
                    tabBarIcon: () => {
                        const img = require("../../assets/icon/icon-grid.png");
                        return <Image source={img}></Image>;
                    },
                }}
            />
            <MainTab.Screen
                name="Create"
                component={CreatePostsScreen}
                options={{
                    headerTitle: "Створити публікацію",
                    headerTitleStyle: {
                        color: "#212121",
                        fontSize: 18,
                        fontFamily: "Roboto-Medium",
                        fontWeight: "medium",
                    },
                    headerLeft: () => {
                        const img = require("../../assets/icon/icon-arrow-left.png");
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Post")}
                            >
                                <Image source={img}></Image>
                            </TouchableOpacity>
                        );
                    },
                    headerTitleAlign: "center",
                    headerLeftContainerStyle: { paddingHorizontal: 16 },
                    tabBarShowLabel: false,
                    tabBarIcon: () => {
                        const img = require("../../assets/icon/icon-btn-plus.png");
                        return <Image source={img}></Image>;
                    },
                }}
            />
            <MainTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => {
                        const img = require("../../assets/icon/icon-user.png");
                        return <Image source={img}></Image>;
                    },
                }}
            />
        </MainTab.Navigator>
    );
}
