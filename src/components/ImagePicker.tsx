import {Alert, Image, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import Button from "./ui/button/Button";
import {
    ImagePickerAsset,
    launchCameraAsync,
    PermissionStatus,
    useCameraPermissions
} from "expo-image-picker";
import {COLORS} from "../constants/colors";

type ImagePickerProps = {
    onImageTaken: (image: ImagePickerAsset) => void,
}

const ImagePicker = ({onImageTaken}: ImagePickerProps) => {
    const [pickedImage, setPickedImage] = useState<ImagePickerAsset>();
    const [permission, requestPermission] = useCameraPermissions();

    async function verifyPermission() {
        if (permission?.status === PermissionStatus.UNDETERMINED) {
            const response = await requestPermission();
            return response.granted;
        }
        if (permission?.status === PermissionStatus.DENIED) {
            Alert.alert('Permission denied', 'You need to grant camera permission to this app');
            return false;
        }
        return true;
    }

    async function onTakeImage() {
        const hasPermission = await verifyPermission();
        if (!hasPermission) return;
        const { assets }= await launchCameraAsync({
            // allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        if (assets) {
            setPickedImage(assets[0]);
            onImageTaken(assets[0]);
        }

    }

    return (
        <View>
            <View style={styles.imageContainer}>
                {pickedImage ?
                    <Image style={styles.image}
                           source={{uri: pickedImage.uri}}/> :
                    <Text style={styles.noImageText}>No image taken yet.</Text>
                }
            </View>
            <Button label="Take Image" onPress={onTakeImage}/>
        </View>
    )
}
export default ImagePicker;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    noImageText: {
        color: COLORS.primary500,
    }
});
