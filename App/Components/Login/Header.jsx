import { View, Text } from 'react-native'
import React from 'react'

export default function Header(props) {
    return (
        <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                {props.title}
            </Text>
        </View>
    )
}