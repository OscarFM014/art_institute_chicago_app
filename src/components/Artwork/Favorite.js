import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Favorite(props) {
    const { id } = props
    const addFavorite = () => {
        console.log("Favorite.js:6", id)
        console.log("Favorite.js:8 addFavorite")
    }
    return (
        <Icon name="heart" color="#fff" size={20} onPress={addFavorite} style={{ marginRight: 5, color: "black" }}></Icon>
    )
}