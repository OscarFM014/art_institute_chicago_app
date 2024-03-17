import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
    // Control form data
    const formik = useFormik({
        initialValues: iValue(),
        validationSchema: Yup.object(vSchema()),
        onSubmit: (formValues) => {
            console.log(formValues)
        }
    })

    return (
        <View>
            <Text style={styles.title}>Login Form</Text>
            <TextInput
                placeholder="Email"
                style={styles.input}
                autoCapitalize='none'
                value={formik.values.email}
                onChangeText={(text) => { formik.setFieldValue('email', text) }}
            />
            <TextInput
                placeholder='password'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => { formik.setFieldValue('password', text) }}
            />
            <Text>{console.log(formik.errors.email)}</Text>
            <Text>{console.log(formik.errors.password)}</Text>
            <Button title="Login" onPress={formik.handleSubmit} />

        </View>
    )
}

// Very similar to the golang validation
function vSchema() {
    return {
        email: Yup.string().required("Required email").email("Invalid email"),
        password: Yup.string().required("Required password").min("Password too short", 3)
    }
}

function iValue() {
    return {
        email: "",
        password: "",
    }
}


const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
})