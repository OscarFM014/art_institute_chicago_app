import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteScreen from '../screens/Favorite'
import ArtworksScreen from '../screens/Artworks'
import AccountScreen from '../screens/Account'

const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
                tabBarLabel: "Favorites",
                tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />,
            }} />
            <Tab.Screen name="Artworks" component={ArtworksScreen} options={{
                tabBarLabel: "",
                tabBarIcon: () => renderIcon(),
            }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarLabel: "My Account",
                tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
            }} />
        </Tab.Navigator>
    )
}


function renderIcon() {
    return (
        <Image
            source={require('../assets/home.png')}
            style={{ width: 75, height: 75, top: -15 }} />
    )
}