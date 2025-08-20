import React from 'react'
import {FlatList} from "react-native";
import {Place} from '../types';
import PlaceItem from "../components/PlaceItem";
import items from "../../assets/data/places.json";

const HomeScreen = () => {
    const places: Place[] = items;

    return (
        <FlatList data={places}
                  keyExtractor={(item, _) => item.id.toString()}
                  renderItem={(info) => {
                      return <PlaceItem place={info.item}/>;
                  }}
        />
    )
}
export default HomeScreen;
