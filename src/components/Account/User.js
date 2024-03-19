import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { Auth } from 'aws-amplify';
import userAuth from "../../hooks/useAuth";

export default function User() {
    const { auth, logout } = userAuth();
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
            {/* <Button title="Sign Out" onPress={handleSignOut} /> */}
        </View>
    )
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
    }
})