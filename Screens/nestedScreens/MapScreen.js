import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
    <View style={styles.container}>
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                longitude: route.params.longitude,
                latitude: route.params.latitude,
                longitudeDelta: 0.001,
                latitudeDelta: 0.001,
            }}
        >
            <Marker
                coordinate={{
                    longitude: route.params.longitude,
                    latitude: route.params.latitude,
                }}
                title="Travel photo"
            />
        </MapView>
    </View>;
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
});
