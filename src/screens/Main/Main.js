//Implrmrntação do bottom tabs

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const BottomTab = createBottomTabNavigator()

import { ContentIcon,TextICon } from "./Style"
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
            tabBarIcon : ({focused}) => {
                if ( route.name === "Home") {
                    return(
                        <ContentIcon
                            tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent" }
                        >
                            <FontAwesome name='calendar' size={18} color={"#4E4B59"}/>
                            {focused && <TextICon>Agenda</TextICon>}
                        </ContentIcon>
                    )
                    
                } else{ return(
                    <ContentIcon
                        tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent" }
                    >
                        <FontAwesome5 name='user-circle' size={22} color={"#4E4B59"}/>
                        {focused && <TextICon>Perfil</TextICon>}
                    </ContentIcon>
                )}
                }


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