//Implrmrntação do bottom tabs

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const BottomTab = createBottomTabNavigator()

import { PatientConsultation } from "../PatientConsultation/PatientConsultation"
import { Profile } from "../Profile/Profile"

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"

export const Main = () => {
    return(
        <BottomTab.Navigator
        initialRouteName="Home"

        screenOptions={({route}) => ({
            tabBarStyle:{backgroundColor:"#FFFFFF", height : 80,paddingTop: 10},
            tabBarActiveBackgroundColor :"transparent",
            tabBarShowLabel : false,
            headerShown : false,
            // tabBarIcon : ({focused} => {
            //     if ( === "Home") {
                    
            //     }
            //     return(

            //     )
            // } else)


        })}
        >
            {/* Criando rota da home */}
            <BottomTab.Screen
                name="Home"
                component={PatientConsultation}
                
            />
            {/* Criando rota do Perfil */}
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                
            />
        </BottomTab.Navigator>
    )
}