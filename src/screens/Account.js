import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Auth } from 'aws-amplify';
import User from '../components/Account/User';



export default function Account() {

    const getCurrentUserInfo = async () => {
        const userInfo = await Auth.currentAuthenticatedUser()
        console.log(userInfo.attributes.email)
        return userInfo.attributes.email
    }

    return (
        <SafeAreaView>
            <User />
            {/* <Text>{getCurrentUserInfo()}</Text> */}
            {/* <Text>Text</Text> */}
        </SafeAreaView>
    )
}