import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import { addArtworkFavoriteApi } from "../../api/favorite"

export default function Favorite(props) {
    const { id } = props
    const addFavorite = async () => {
        try {
            await addArtworkFavoriteApi(id);
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <Icon name="heart" color="#fff" size={20} onPress={addFavorite} style={{ marginRight: 5, color: "black" }}></Icon>
    )
}