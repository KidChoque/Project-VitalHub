import { AntDesign } from "@expo/vector-icons";

import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "../ContainerCard/ContainerCard";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
  img,age,name,appointmentType, appointmentHour
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
          <ClockCard>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />
            <TextBold situacao={situacao} color={"#49B3BA"}>
              {appointmentHour}
            </TextBold>
          </ClockCard>
          
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
