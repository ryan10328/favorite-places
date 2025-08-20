import React from 'react'
import {Stack, useRouter} from "expo-router";
import {Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const RootLayout = () => {
    const router = useRouter();
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: 'All Places',
                headerRight: ({tintColor}) => {
                    return (
                        <Pressable onPress={() => router.replace("/create")}>
                            <AntDesign name="plus" color={tintColor} size={16}/>
                        </Pressable>
                    )
                },
            }}/>
            <Stack.Screen name="create" options={{
                title: 'Create Place',
            }}/>
        </Stack>
    );
}
export default RootLayout
