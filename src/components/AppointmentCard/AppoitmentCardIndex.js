import { AntDesign } from "@expo/vector-icons";
import Profile from "../../../assets/Perfil.png";

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
}) => {
  return (
    <ContainerCardList>
      <ProfileImage source={Profile} />

      <ContentCard>
        <DataProfileCard>
          <ProfileName>João</ProfileName>

          <ProfileData>
            <TextAge>45</TextAge>
            <TextBold>Rotina</TextBold>
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
              14:00
            </TextBold>
          </ClockCard>

          {/* {situacao == "cancelado" ? (
            <></>
          ) : (
            situacao == "pendente"(
            <ButtonCard onPress={onPressCancel} >
                <ButtonText situacao={situacao}>Cancelar</ButtonText>
            </ButtonCard>)
          )
           :  (
            <ButtonCard onPress={onPressAppointment} >
                <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
             </ButtonCard>
          )} */}
        </ViewRow>
      </ContentCard>
    </ContainerCardList>
  );
};
