import { View, Text, Button } from 'react-native';
import React from 'react';
import { Auth } from 'aws-amplify';
import LoginForm from '../Auth/LoginForm';



export default function User() {
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
        <View>
            <Text>UserData</Text>
            <LoginForm />
            {/* <Button title="Sign Out" onPress={handleSignOut} /> */}
        </View>
    )
}