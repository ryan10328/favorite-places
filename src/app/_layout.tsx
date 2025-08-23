import React from 'react'
import {Stack, useRouter} from "expo-router";
import {Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {COLORS} from "../constants/colors";

const RootLayout = () => {
    const router = useRouter();
    return (
        <Stack screenOptions={{
            headerStyle: {backgroundColor: COLORS.primary500},
            headerTintColor: COLORS.primary50,
            headerTitleStyle: {color: COLORS.primary50},
        }}>
            <Stack.Screen name="index" options={{
                title: 'Your favorite Places',
                headerRight: ({tintColor}) => {
                    return (
                        <Pressable onPress={() => router.push("/create")}>
                            <AntDesign name="plus" color={tintColor} size={16}/>
                        </Pressable>
                    )
                },
            }}/>
            <Stack.Screen name="create" options={{
                title: 'Add Place',
            }}/>
        </Stack>
    );
}
export default RootLayout
