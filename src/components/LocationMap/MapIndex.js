import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { MapContainer } from "./LocationMap"
import { StyleSheet } from "react-native"


export const LocationMap = () => {
    return(
        <MapContainer>
        <MapView 
        provider={PROVIDER_GOOGLE}
        // customMapStyle={}
        style={styles.map}
        >
            
        </MapView>
        </MapContainer>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: "100%"
    }
})

// const grayMapStyle = 