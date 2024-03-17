import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
//Formik for controling the data from forms
import { useFormik } from "formik";
// yup for validation
import * as Yup from "yup";
import { Auth } from 'aws-amplify';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const response = await Auth.signIn(email, password)
        console.log(response)
    }

    // Control form data
    const formik = useFormik({
        initialValues: iValue(),
        validationSchema: Yup.object(vSchema()),
        validateOnChange: false,
        onSubmit: (formValues) => {
            setEmail(formValues.email)
            setPassword(formValues.password)
            handleSubmit()
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
            <Text style={styles.errors}>{formik.errors.email} {"\n"} {formik.errors.password}</Text>
            <Button title="Login" onPress={formik.handleSubmit} />

        </View>
    )
}

// Very similar to the golang validation
function vSchema() {
    return {
        email: Yup.string().required("Required email").email("Invalid email"),
        password: Yup.string().required("Required password").min(3, "Password too short")
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
    },
    errors: {
        textAlign: "center",
        color: "red",
        margin: 20
    }
})