import React, { useState, useEffect } from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addArtworkFavoriteApi, isArtworkFavoriteApi, removeArtwokFavoriteApi } from "../../api/favorite"

export default function Favorite(props) {
    const { id } = props
    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false)

    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
        (async () => {
            try {
                const response = await isArtworkFavoriteApi(id);
                setIsFavorite(response);
            } catch (error) {
                setIsFavorite(false)
            }
        })();
    }, [id, reloadCheck])

    const onReloadCheckFavorite = () => {
        setReloadCheck((prev) => !prev)
    }

    const addFavorite = async () => {
        try {
            await addArtworkFavoriteApi(id);
            onReloadCheckFavorite();
        } catch (error) {
            console.error(error)
        }
    }

    const removeFavorite = async () => {
        try {
            await removeArtwokFavoriteApi(id);
            onReloadCheckFavorite();
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Icon
            name="heart"
            color="#fff"
            size={20}
            onPress={isFavorite ? removeFavorite : addFavorite}
            style={{ marginRight: 5, color: "black" }}>
        </Icon>
    )
}