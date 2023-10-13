import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PlaceDetailItem from './PlaceDetailItem';
import Colors from '../../Shared/Colors';
import GoogleMapView from '../Home/GoogleMapView';
import { TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { Linking } from 'react-native';
import { ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function PlaceDetail() {
  const param = useRoute().params;
  const [place, setPlace] = useState([]);

  useEffect(() => {
    setPlace(param.place)
    console.log(param?.place);

  }, [])
  console.log(place?.formatted_address);
  const onDirectionClick = () => {
    const url = Platform.select({
      ios: "maps:" + place.geometry.location.lat + "," + place.geometry.location.lng + "?q=" + place.name + " " + place.formatted_address,
      android: "geo:" + place.geometry.location.lat + "," + place.geometry.location.lng + "?q=" + place.name + " " + place.formatted_address,
    });

    Linking.openURL(url)
  }
  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.WHITE, flex: 1 }}>
      <PlaceDetailItem
        place={place}
        onDirectionClick={() => onDirectionClick()}
      />
      <GoogleMapView placeList={[place]} />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          alignContent: "center",
          alignItem: "center",
          margin: 8,
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          paddingBottom: 15,
          marginBottom: 50
        }}
        onPress={() => onDirectionClick()}
      >
        <Ionicons name="navigate-circle-outline"
          size={30} color="white" />

        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
          }}
        >
          Get Direction on Google Map
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}