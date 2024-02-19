import { Button, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="ForgotPassword" onPress={() => navigation.navigate("ForgotPassword")} />
      <Button title="ResetPassaword" onPress={() => navigation.navigate("ResetPassaword")} />
      <Button title="CreateAccount" onPress={() => navigation.navigate("CreateAccount")} />
      <Button title="VerifyEmail" onPress={() => navigation.navigate("VerifyEmail")} />
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
      <Button title="MedicalConsultation" onPress={() => navigation.navigate("MedicalConsultation")} />
    </View>
  );
};
