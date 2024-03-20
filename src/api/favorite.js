import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";
// {} named packages; default packages

export async function getArtworkFavoriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || "[]");
        // return response ? JSON.parse(response) : [];
    } catch (error) {
        throw error
    }
}

export async function addArtworkFavoriteApi(id) {
    try {
        const favorites = await getArtworkFavoriteApi();
        favorites.push(id);
        console.log("favorite.js:19", favorites)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error
    }
}

export async function isArtworkFavoriteApi(id) {
    try {
        const response = await getArtworkFavoriteApi();
        return includes(response, id)
    } catch (error) {
        throw error
    }
}

// This function should be a sql call 
export async function removeArtwokFavoriteApi(id) {
    try {
        const favorites = await getArtworkFavoriteApi();
        const newFavorites = pull(favorites, id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
        throw error
    }
}

