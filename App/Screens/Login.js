import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../../config'
import { TextInput } from 'react-native-gesture-handler'
export default function Login() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    // const [loginDetails, setLoginDetails] = useState({email: '', password: ''})

    // const updateLoginDails = (val, key) =>{
    //     const loginDetail = {...loginDetails}
    //     loginDetail[key] = val
    //     setLoginDetails({...loginDetail})
    // }
    const handleLogin = async () => {
        setLoading(true)
        if (!email || !password) {
            setLoading(false)
            alert('All fields are required')
            return
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert('Invalid login credentials!')
            setLoading(false)
        }
    }
    return (
        <View
            style={styles.container}>
            <Text style={{ fontWeight: 'semibold', fontSize: 25, marginBottom: 20 }}>Login here</Text>
            <View style={{ marginBottom: 30 }}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={email => setEmail(email.trim())}
                    value={email}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                    value={password}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogin()}
                disabled={loading ? true : false}
            >
                <Text style={{ fontWeight: 'bold', backgroundColor: 'skyblue', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 10 }}>{loading ? 'Please wait...' : 'Login'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.push('register')}
            >
                <Text style={{ fontWeight: 'bold', }}>Dont have an account? Register Now</Text>
            </TouchableOpacity>
            <Text style={{ padding: 10, fontSize: 42 }}>

            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40
    },
    textInput: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 370,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginBottom: 40,
        paddingLeft: 10
    },
    button: {
        marginBottom: 20,
        height: 60,
        width: 370,
        fontSize: 20,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})