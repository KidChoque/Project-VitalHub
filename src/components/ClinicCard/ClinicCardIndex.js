import { View } from "react-native";
import { ClinicSelected, ContainerClinicCard, ContentClinicCard, DataProfileCard, IconCard, ProfileData, ProfileName, TextBold, YellowText } from "../ContainerCard/ContainerCard";
import { AntDesign } from "@expo/vector-icons";

export const ClinicCard = ({ clinicName, cityState,select,onPress,review,weekDays }) => {

    if (select !== clinicName) {
        return (
        
            <ContainerClinicCard  onPress={onPress}>
        
              <ContentClinicCard>
                <DataProfileCard>
                  <ProfileName>{clinicName}</ProfileName>
                  <ProfileData>
                    <TextBold>{cityState}</TextBold>
                  </ProfileData>
                </DataProfileCard>
              </ContentClinicCard>
              <View style={{ flexDirection: "collum" }}>
        
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"flex-end"}}>
              <AntDesign name="star" size={24} color="#F9A620"  />
               <YellowText>{review}</YellowText>
              </View>
              <IconCard>
                <TextBold>{weekDays}</TextBold>
              </IconCard>
              </View>
      
            </ContainerClinicCard>
          );
    } else {
        return (
        
            <ClinicSelected  onPress={onPress}>
        
              <ContentClinicCard>
                <DataProfileCard>
                  <ProfileName>{clinicName}</ProfileName>
                  <ProfileData>
                    <TextBold>{cityState}</TextBold>
                  </ProfileData>
                </DataProfileCard>
              </ContentClinicCard>
              <View style={{ flexDirection: "collum" }}>
        
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"flex-end"}}>
              <AntDesign name="star" size={24} color="#F9A620"  />
               <YellowText>{review}</YellowText>
              </View>
              <IconCard>
                <TextBold>{weekDays}</TextBold>
              </IconCard>
              </View>
            
            </ClinicSelected>
          );
    }
   
  };