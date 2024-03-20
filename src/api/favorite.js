import AsyncStorage from "@react-native-async-storage/async-storage";
import { Include, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";
// {} named packages; default packages

export async function getArtworkFavoriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return response;
    } catch (error) {
        throw error
    }
}

export async function addArtworkFavoriteApi(id) {
    try {
        const favorites = [];
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error
    }
}

