import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { firebase } from '../../../config'
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
    const logoutHandler = () => {
        firebase.auth().signOut()
    }
    return (
        <View style={{
            display: 'flex', flexDirection: 'row',
            justifyContent: 'space-evenly', gap: 10,
            alignItems: 'center'
        }}>
            <Image source={require('./../../../assets/logo.png')}
                style={styles.logo} />

            <View>
                <TextInput placeholder='Search'
                    style={styles.searchBar}
                />
            </View>
            <TouchableOpacity onPress={() => logoutHandler()}>
                <Ionicons name="md-power" size={30} color="red" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50
    },
    searchBar: {
        borderWidth: 1,
        borderColor: Colors.GRAY,
        padding: 4,
        borderRadius: 50,
        paddingLeft: 10,
        width: Dimensions.get('screen').width * 0.53,
        borderColor: Colors.PRIMARY,

    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 100
    }
})