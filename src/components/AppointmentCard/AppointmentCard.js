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

export const DrSelectionCard = ({}) => {
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
      </ContentCard>
    </ContainerCardList>
  );
};
