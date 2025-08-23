import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useEffect} from 'react'
import {Controller, useForm} from "react-hook-form";
import {arktypeResolver} from "@hookform/resolvers/arktype";
import {type} from "arktype";
import {COLORS} from "../constants/colors";
import Button from "../components/ui/button/Button";

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
        trigger().then();
    }, []);

    const onSubmit = (values: typeof schema.infer) => {
        console.log(values);
    };

    return (
        <ScrollView>
            <View style={{gap: 20, padding: 10}}>
                <View style={{gap: 10}}>
                    <Text style={styles.titleText}>Title</Text>
                    <Controller name="title" control={control} render={({field: {onChange, onBlur, value}}) => {
                        return (
                            <TextInput style={styles.formInput}
                                       placeholder="Title"
                                       onBlur={onBlur}
                                       onChangeText={onChange}
                                       value={value}/>
                        )
                    }}/>
                    {errors.title &&
                        <View style={{flexDirection: 'column', alignItems: 'flex-end', paddingHorizontal: 5}}>
                            <Text style={styles.errorText}>{errors.title.message}</Text>
                        </View>
                    }
                </View>
                <View>
                    <Button variant="primary"
                            label="Submit"
                            size="sm"
                            onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </ScrollView>
    )
}
export default CreateScreen;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    formInput: {
        paddingLeft: 6,
        height: 40,
        backgroundColor: COLORS.secondary200,
        borderRadius: 5,
    },
    errorText: {
        fontWeight: "bold",
        color: COLORS.danger500,
    },
});
