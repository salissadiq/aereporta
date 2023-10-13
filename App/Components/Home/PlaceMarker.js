import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
import { Image } from 'react-native'

export default function PlaceMarker({ item }) {
  return (
    <Marker
      title={item.name}
      coordinate={
        {
          latitude: item.geometry.location.lat,
          longitude: item.geometry.location.lng,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0421,
        }
      }
    >
      <Image source={require('../../../assets/hospital.png')} style={{ height: 40, width: 30 }} />

    </Marker>
  )
}