import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Auth } from 'aws-amplify';
import User from '../components/Account/User';
import useAuth from '../hooks/useAuth';
import LoginForm from '../components/Auth/LoginForm';


export default function Account() {
    const { auth } = useAuth();

    const getCurrentUserInfo = async () => {
        const userInfo = await Auth.currentAuthenticatedUser()
        console.log(userInfo.attributes.email)
        return userInfo.attributes.email
    }

    return (
        <SafeAreaView>
            {auth ? <User /> : <LoginForm />}
        </SafeAreaView>
    )
}