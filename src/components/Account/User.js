import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { Auth } from 'aws-amplify';
import userAuth from "../../hooks/useAuth";

export default function User() {
    const { auth, logout } = userAuth();

    // TODO: How to implement this on the logout?
    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            console.log('User signed out successfully');
            // Redirect or navigate to the login screen
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <View style={styles.content}>
            <View style={styles.titleBlock}>
                {/* It didn't ask for the username in the sign up */}
                <Text style={styles.title}>Welcome!</Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu title="Email" text={auth.attributes.email} />
                <ItemMenu title="Phone Number" text={auth.attributes.phone_number} />
                <ItemMenu title="Favorites" text="0 artworks" />
            </View>
            <Button title="Logout" onPress={logout} />
        </View >
    )
}

function ItemMenu(props) {
    const { title, text } = props;
    return (
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}</Text>
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    titleBlock: {
        marginBottom: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 22
    },
    text: {
        fontWeight: "300",
        fontSize: 15
    },
    dataContent: {
        marginBottom: 20,
    },
    itemMenu: {
        flexDirection: "row",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#CFCFCF",
        // backgroundColor: "red"
    },
    itemMenuTitle: {
        fontWeight: "bold",
        paddingRight: 10,
        width: 120
    }
})