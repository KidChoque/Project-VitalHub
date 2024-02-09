import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Navigation } from "./src/screens/Navigation/Navigation";


const Stack = createNativeStackNavigator();

import { useFonts,MontserratAlternates_600SemiBold,MontserratAlternates_500Medium,MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';

import {Quicksand_500Medium } from '@expo-google-fonts/quicksand';

import { Login } from "./src/screens/Login/Login";
import { ForgotPassaword } from "./src/screens/ForgotPassword/ForgotPassword";
import { VerifyEmail } from "./src/screens/VerifyEmail/VerifyEmail";
import { ResetPassaword } from "./src/screens/ResetPassword/ResetPassword";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";

export default function App() {

  const[fonstLoaded,fontsError]= useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium
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


      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassaword}
        options={{title: "ForgotPassword"}}
       
       />

      <Stack.Screen
        name='VerifyEmail'
        component={VerifyEmail}
        options={{title: "VerifyEmail"}}
       
       />
      <Stack.Screen
        name='ResetPassaword'
        component={ResetPassaword}
        options={{title: "ResetPassaword"}}
       
       />
      <Stack.Screen
        name='CreateAccount'
        component={CreateAccount}
        options={{title: "CreateAccount"}}
       
       />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


