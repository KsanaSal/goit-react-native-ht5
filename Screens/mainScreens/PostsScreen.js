import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultPostsScreen from "../nestedScreens/DefaultPostScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
    return (
        <NestedScreen.Navigator
            screenOptions={{ headerShown: false }}
            // initialRouteName="DefaultScreen"
        >
            <NestedScreen.Screen
                name="DefaultScreen"
                component={DefaultPostsScreen}
            />
            <NestedScreen.Screen
                name="Comments"
                component={CommentsScreen}
                screenOptions={{ headerShown: false }}
                // options={{
                //     headerTitle: "Коментарі",
                //     headerTitleStyle: {
                //         color: "#212121",
                //         fontSize: 18,
                //         fontFamily: "Roboto-Medium",
                //         fontWeight: "medium",
                //     },
                //     headerRight: () => {
                //         const img = require("../../assets/icon/icon-arrow-left.png");
                //         return (
                //             <TouchableOpacity
                //                 onPress={() =>
                //                     navigation.navigate("DefaultScreen")
                //                 }
                //             >
                //                 <Image source={img}></Image>
                //             </TouchableOpacity>
                //         );
                //     },
                //     headerTitleAlign: "center",
                //     headerRightContainerStyle: { paddingHorizontal: 16 },
                //     tabBarShowLabel: false,
                // }}
            />
            <NestedScreen.Screen
                name="Map"
                component={MapScreen}
                screenOptions={{ headerShown: false }}
            />
        </NestedScreen.Navigator>
    );
};

export default PostsScreen;
