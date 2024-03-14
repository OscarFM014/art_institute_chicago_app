import { API_HOST, API_HOST_IMAGE } from "../utils/constants";

export async function getArtworksApi(newUrl) {
    try {
        const url = `${API_HOST}/artworks?limit=20&offset=0`;
        const response = await fetch(newUrl || url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getArtworkById(id) {
    try {
        const url = `${API_HOST}/artworks/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}