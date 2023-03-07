import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Map</Text>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    longitude: "-122.0849872",
                    latitude: "37.4226711",
                    longitudeDelta: 0.001,
                    latitudeDelta: 0.001,
                }}
            >
                <Marker
                    coordinate={{
                        longitude: "-122.0849872",
                        latitude: "37.4226711",
                    }}
                    title="Travel photo"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MapScreen;
