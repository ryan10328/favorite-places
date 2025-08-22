import React from 'react'
import {FlatList, StyleSheet, View, Text} from "react-native";
import type {Place} from '../types';
import PlaceItem from "../components/PlaceItem";
import items from "../../assets/data/places.json";
import {COLORS} from "../constants/colors";

const HomeScreen = () => {
    const places: Place[] = items;

    if (!places || places.length === 0) {
        return <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>No places added yet. Start adding some!</Text>
        </View>
    }

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

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16,
        color: COLORS.primary200,
    }
});
