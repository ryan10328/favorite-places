import {Alert, StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import Button from "./ui/button/Button";
import {COLORS} from "../constants/colors";
import {getCurrentPositionAsync, PermissionStatus, useForegroundPermissions} from "expo-location";

const LocationPicker = () => {
    const [locationPermission, requestLocationPermission] = useForegroundPermissions();
    const [location, setLocation] = useState();

    async function verifyPermission() {
        if (locationPermission?.status === PermissionStatus.UNDETERMINED) {
            const response = await requestLocationPermission();
            return response.granted;
        }

        if (locationPermission?.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permission!", "You need to grant location permissions to use this app.");
        }

        return true;
    }

    async function getLocationHandler() {
        const hasPermission = await verifyPermission();
        if (!hasPermission) return;

        const location = await getCurrentPositionAsync();
        console.log(location)
    }

    return (
        <View style={styles.container}>
            <View style={styles.mapPreview}></View>
            <View style={styles.buttonContainer}>
                <Button label="Locate User" icon="location" outlined onPress={getLocationHandler}/>
                <Button label="Pick on Map" icon="map" outlined onPress={() => {
                }}/>
            </View>
        </View>
    )
}
export default LocationPicker;

const styles = StyleSheet.create({
    container: {},
    buttonContainer: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary100,
        borderRadius: 4,
    },
});
