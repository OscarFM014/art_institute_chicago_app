import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteNavigation from './FavoritesNavigation'
import ArtworkNavigation from './ArtworkNavigation'
import AccountNavigation from './AccountNavigation'

const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='ArtworksNavigation'>
            <Tab.Screen name="FavoriteNavigation" component={FavoriteNavigation} options={{
                tabBarLabel: "Favorites",
                tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />,
            }} />
            <Tab.Screen name="ArtworksNavigation" component={ArtworkNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: () => renderIcon(),
            }} />
            <Tab.Screen name="AccountNavigation" component={AccountNavigation} options={{
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