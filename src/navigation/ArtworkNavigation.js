import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ArtworkScreen from "../screens/Artwork"

const Stack = createNativeStackNavigator();

export default function ArtworkNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Artwork" component={ArtworkScreen} />
        </Stack.Navigator>
    )
}