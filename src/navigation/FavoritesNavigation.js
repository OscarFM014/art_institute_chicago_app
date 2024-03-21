import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoriteScreen from "../screens/Favorite"
import ArtworkScreen from "../screens/Artwork";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Favorites" component={FavoriteScreen} />
            <Stack.Screen name="Artwork" component={ArtworkScreen} options={{ title: "", headerTransparent: true }} />
        </Stack.Navigator>
    )
}