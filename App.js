import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Navigation } from "./src/screens/Navigation/Navigation";


const Stack = createNativeStackNavigator();

import { useFonts,MontserratAlternates_600SemiBold,MontserratAlternates_500Medium,MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Login } from "./src/screens/Login/Login";

export default function App() {

  const[fonstLoaded,fontsError]= useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold
   })
  
   if (!fonstLoaded && !fontsError) {
    return null;
   }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='navigation'
          component={Navigation}
          options={{ title: 'Navigation' }}
        />

       <Stack.Screen
        name='Login'
        component={Login}
        options={{title: "Login"}}
       
       />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


