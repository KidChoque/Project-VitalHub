import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Navigation } from "./src/screens/Navigation/Navigation";


const Stack = createNativeStackNavigator();

import { useFonts,MontserratAlternates_600SemiBold,MontserratAlternates_500Medium,MontserratAlternates_700Bold,Quicksand_400Regular,Quicksand_600Semibold,Quicksand_500Medium  } from '@expo-google-fonts/montserrat-alternates';


import { Login } from "./src/screens/Login/Login";
import { ForgotPassaword } from "./src/screens/ForgotPassword/ForgotPassword";
import { VerifyEmail } from "./src/screens/VerifyEmail/VerifyEmail";
import { ResetPassaword, ResetPassword } from "./src/screens/ResetPassword/ResetPassword";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { Profile } from "./src/screens/Profile/Profile";
import { MedicalConsultation } from "./src/screens/MedicalConsultation/MedicalConsultation";
import { PatientConsultation } from "./src/screens/PatientConsultation/PatientConsultation";
import { SelectClinic } from "./src/screens/SelectClinic/SelectClinic";
import { SelectDoctor } from "./src/screens/SelectDoctor/SelectDoctor";
import { SelectDate } from "./src/screens/SelectDate/SelectDate";
import { Main } from "./src/screens/Main/Main";
import { ConsultationLocation } from "./src/screens/ConsultationLocation/ConsultationLocation";

export default function App() {

  const[fonstLoaded,fontsError]= useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quicksand_600Semibold
    
   })
  
   if (!fonstLoaded && !fontsError) {
    return null;
   }


  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
         name='Login'
         component={Login}
         options={{title: "Login"}}
        
        />
        <Stack.Screen
            name='Main'
            component={Main}
        
        />
        {/* <Stack.Screen
          name='navigation'
          component={Navigation}
          options={{ title: 'Navigation' }}
        /> */}



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
        name='ResetPassword'
        component={ResetPassword}
        options={{title: "ResetPassword"}}
       
       />
      <Stack.Screen
        name='CreateAccount'
        component={CreateAccount}
        options={{title: "CreateAccount"}}
       
       />

      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{title: "Profile"}}
       
       />
      <Stack.Screen
        name='MedicalConsultation'
        component={MedicalConsultation}
        options={{title: "MedicalConsultation"}}
       
       />
      <Stack.Screen
        name='PatientConsultation'
        component={PatientConsultation}
        options={{title: "PatientConsultation"}}
       
       />
      <Stack.Screen
        name='SelectClinic'
        component={SelectClinic}
        options={{title: "SelectClinic"}}
       
       />

      <Stack.Screen
        name='SelectDoctor'
        component={SelectDoctor}
        options={{title: "SelectDoctor"}}
       
       />
      <Stack.Screen
        name='SelectDate'
        component={SelectDate}
        options={{title: "SelectDate"}}
       
       />
      <Stack.Screen
        name='ConsultationLocation'
        component={ConsultationLocation}
        options={{title: "ConsultationLocation"}}
       
       />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


