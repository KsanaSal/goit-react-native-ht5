import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import PostsScreen from "../../Screens/mainScreens/PostsScreen";
import CreatePostsScreen from "../../Screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "../../Screens/mainScreens/ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home() {
    return (
        <MainTab.Navigator
            screenOptions={{
                headerShown: false,
                showLabel: false,
                tabBarStyle: {
                    paddingBottom: 24,
                    paddingTop: 8,
                    height: 80,
                    shadowColor: "rgba(0, 0, 0, 0.3)",
                    shadowOffset: "0px -0.5px 0px",
                },
            }}
        >
            <MainTab.Screen
                name="Post"
                component={PostsScreen}
                options={{
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
