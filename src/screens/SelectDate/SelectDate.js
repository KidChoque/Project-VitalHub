import { useState } from "react";
import CompleteCalendar from "../../components/CompleteCalendar/CompleteCalendar";
import {
  ButtonContainer,
  Container,
} from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import SelectInput from "../../components/SelectInput/SelectInput";
import {
  Button,
  ButtonTitle,
  ModalBlueTitle,
  ModalCancelButton,
} from "../../components/Button/Button";
import { ConfirmDateInfo } from "../../components/Modal/ModalIndex";

export const SelectDate = () => {

  const [showConfirmModal, setConfirmModal] = useState(false);


  const [selectDate, setSelectDate] = useState();
  const [selectTime, setSelectTime] = useState();

  const [avaliableTimesData, setAvaliableTimeData] = useState([
    "12:30",
    "14:00",
    "15:30",
    "16:00",
    "17:00",
  ]);

  return (
    <Container>
      <Title>Selecione a data</Title>
      <CompleteCalendar
        selectedDate={selectDate}
        handleSelectedDateFn={setSelectDate}
      />

      <SelectInput
        defaultText={"Selecionar horário"}
        labeltext={"Selecionar um horário Disponível"}
        data={avaliableTimesData}
        handleSelectedFn={setSelectTime}
      ></SelectInput>

      <ButtonContainer>
        <Button onPress={() => setConfirmModal(true)}>
          <ButtonTitle>Confirmar</ButtonTitle>
        </Button>

        <ModalCancelButton>
          <ModalBlueTitle>Cancelar</ModalBlueTitle>
        </ModalCancelButton>
      </ButtonContainer>

      <ConfirmDateInfo visible={showConfirmModal} setShowModal={setConfirmModal}></ConfirmDateInfo>
    </Container>
  );
};
