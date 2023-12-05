import { Text, View } from "react-native";
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { markers } from "./markers";

const INITIAL_REGION = {
    latitude: -14.235004,
    longitude: -55.437302,
    latitudeDelta: 30,
    longitudeDelta: 40,
};

function MapsScreen() {
    return (
        <View style={{flex: 1}}>
          <MapView 
            style={StyleSheet.absoluteFill} 
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_REGION}
            >
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    title={marker.name}
                    coordinate={marker}
                />
				))}
			</MapView>
        </View>
      );
}

export default MapsScreen;