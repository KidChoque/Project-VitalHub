import { AntDesign } from "@expo/vector-icons";
// import { AntDesign } from '@expo/vector-icons';
import {
  ButtonCard,
  ButtonText,
  IconCard,
  ContainerCardList,
  ContainerClinicCard,
  ContentCard,
  ContentClinicCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
  YellowText,
  ClinicSelected,
  DrContainerCardList,
  DrCardSelected,
} from "../ContainerCard/ContainerCard";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
  img,
  age,
  name,
  appointmentType,
  appointmentHour,
}) => {
  return (
    <ContainerCardList>
      <ProfileImage source={img} />

      <ContentCard>
        <DataProfileCard>
          <ProfileName>{name}</ProfileName>

          <ProfileData>
            <TextAge>{age}</TextAge>
            <TextBold>{appointmentType}</TextBold>
          </ProfileData>
        </DataProfileCard>

        <ViewRow>
          <IconCard>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />
            <TextBold situacao={situacao} color={"#49B3BA"}>
              {appointmentHour}
            </TextBold>
          </IconCard>

          {situacao == "cancelado" ? (
            <></>
          ) : situacao == "pendente" ? (
            <ButtonCard onPress={onPressCancel}>
              <ButtonText situacao={situacao}>Cancelar</ButtonText>
            </ButtonCard>
          ) : (
            <ButtonCard onPress={onPressAppointment}>
              <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
            </ButtonCard>
          )}
        </ViewRow>
      </ContentCard>
    </ContainerCardList>
  );
};

export const DrSelectionCard = ({doctorName,medicalSpecialty,drImg,select,onPress}) => {
  
  if (select !== doctorName) {
    return (
      <DrContainerCardList onPress={onPress}>
        <ProfileImage source={drImg} />
  
        <ContentCard>
          <DataProfileCard>
            <ProfileName>{doctorName}</ProfileName>
  
            <ProfileData>
              <TextBold>{medicalSpecialty}</TextBold>
            </ProfileData>
          </DataProfileCard>
        </ContentCard>
      </DrContainerCardList>
    );
  
  
    
  } else {
    return (
      <DrCardSelected onPress={onPress}>
        <ProfileImage source={drImg} />
  
        <ContentCard>
          <DataProfileCard>
            <ProfileName>{doctorName}</ProfileName>
  
            <ProfileData>
              <TextBold>{medicalSpecialty}</TextBold>
            </ProfileData>
          </DataProfileCard>
        </ContentCard>
      </DrCardSelected>
    );
  
  
  }
 
};
