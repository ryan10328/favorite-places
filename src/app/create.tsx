import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useEffect} from 'react'
import {Controller, useForm} from "react-hook-form";
import {arktypeResolver} from "@hookform/resolvers/arktype";
import {type} from "arktype";
import {COLORS} from "../constants/colors";
import ImagePicker from "../components/ImagePicker";
import {ImagePickerAsset} from "expo-image-picker";
import LocationPicker from "../components/LocationPicker";

const schema = type({
    title: "string & string > 0",
})

const CreateScreen = () => {
    const {
        control,
        handleSubmit,
        trigger,
        formState: {errors},
    } = useForm<typeof schema.infer>({
        defaultValues: {
            title: "",
        },
        resolver: arktypeResolver(schema)
    })

    useEffect(() => {
    }, []);

    const onSubmit = (values: typeof schema.infer) => {
        console.log(values);
    };

    const handleImageTaken = (image: ImagePickerAsset) => {
        console.log(image);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleText}>Title</Text>
                    <Controller name="title"
                                control={control}
                                render={({field: {onChange, onBlur, value}}) => {
                                    return <TextInput
                                        style={[styles.formInput, errors.title ? styles.formInputError : null]}
                                        placeholder="Title"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}/>
                                }}/>
                    {errors.title &&
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{errors.title.message}</Text>
                        </View>
                    }
                </View>
                <ImagePicker onImageTaken={handleImageTaken}/>
                <LocationPicker/>
                {/*<View>*/}
                {/*    <Button variant="primary"*/}
                {/*            label="Submit"*/}
                {/*            size="sm"*/}
                {/*            outlined*/}
                {/*            onPress={handleSubmit(onSubmit)}/>*/}
                {/*</View>*/}
            </View>
        </ScrollView>
    )
}
export default CreateScreen;

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    titleText: {
        fontSize: 12,
        fontWeight: "bold",
        color: COLORS.secondary500,
        marginBottom: 8,
    },
    formInput: {
        paddingLeft: 6,
        height: 40,
        backgroundColor: COLORS.secondary200,
        borderRadius: 5,
    },
    formInputError: {
        borderColor: COLORS.danger500,
        borderWidth: 1,
    },
    errorContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        paddingHorizontal: 5,
    },
    errorText: {
        color: COLORS.danger500,
    },
});
