import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { mapskey } from "../../utils/mapApiKey";
import {
  ClinicMapInfo,
  Container,
  InfoContainer,
} from "../../components/Container/Container";
import { Modal, ModalMap } from "../../components/Modal/Modal";
import InfoBox from "../../components/InfoBox/InfoIndex";
import { Label, Label2 } from "../../components/Label/LabelIndex";
import { DarkInput, TinyInput, TinyInput2 } from "../DarkInput/DarkInput";
import { useEffect, useRef, useState } from "react";
import {
  LocationAccuracy,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export const ConsultationLocation = (navigation) => {
  const arr1 = ["São Paulo", "SP"];

  const mapReference = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.6521,
    longitude: -46.5273,
  });

  async function GetCurrentLocation() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const location = await getCurrentPositionAsync();

      await initialPosition(location);
    }
  }

  useEffect(() => {
    GetCurrentLocation();

    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      }, async (responde) => {
        await setInitialPosition(response);
        mapReference.current?.animateCamera({
          pitch: 60,
          center: respose.coords,
        });
      }
    );
  }, [1000]);

  useEffect(() => {
    ReloadMapView();
  }, [initialPosition]);

  async function ReloadMapView() {
    console.log(initialPosition);
    console.log(mapReference);

    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          {
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
          },
          {
            latitude: finalPosition.coords.latitude,
            longitude: finalPosition.coords.longitude,
          },
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true,
        }
      );
    }
  }

  return (
    <Container>
      {initialPosition != null ? (
        <MapView
          ref={mapReference}
          // Marca o ponto de início
          initialRegion={{
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={grayMapStyle}
          style={styles.map}
        >
          <MapViewDirections
            origin={initialPosition.coords}
            destination={{
              latitude: -23.6521,
              longitude: -46.5273,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            apikey={mapskey}
            strokeWidth={5}
            strokeColor="#E11D14"
          />
        </MapView>
      ) : (
        <Text>Não foi posivel carregar o local</Text>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "45%",
    width: "100%",
  },
});

const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];
