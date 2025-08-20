import {Text, View} from 'react-native'
import React from 'react'
import {Place} from "../types";

type PlaceItemProps = {
    place: Place;
}

const PlaceItem = ({place}: PlaceItemProps) => {
    return (
        <View>
            <Text>{place.id}</Text>
            <Text>{place.title}</Text>
            <Text>{place.address}</Text>
            <Text>{place.imageUrl}</Text>
            <Text>{place.location.lat}</Text>
            <Text>{place.location.lat}</Text>
        </View>
    )
}
export default PlaceItem
