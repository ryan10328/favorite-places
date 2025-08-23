import {GestureResponderEvent, Image, Pressable, Text, View} from 'react-native'
import React from 'react'
import type {Place} from "../types";

type PlaceItemProps = {
    place: Place;
    onSelect?: (event: GestureResponderEvent) => void;
}

const PlaceItem = ({place, onSelect}: PlaceItemProps) => {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{uri: place.imageUrl}}/>
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
                {/*<Text>{place.location.lat}</Text>*/}
                {/*<Text>{place.location.lat}</Text>*/}
            </View>

        </Pressable>
    )
}
export default PlaceItem
