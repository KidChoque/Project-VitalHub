import { Title } from "../Title/Title";
import { Subtitle, SubtitleBox } from "../Subtitle/Subtitle";
import {
  Button,
  ButtonTitle,
  ModalBlueTitle,
  ModalButton,
  ModalButtonTitle,
  ModalCancelButton,
} from "../Button/Button";

import {
  Modal,
  ModalContent,
  ModalContent2,
  ModalImage,
  PatientModal,
  PatientModal2,
  ScheduleModal,
} from "./Modal";

import PatientImage from "../../../assets/User.png";
import InfoBox from "../InfoBox/InfoIndex";
import { View } from "react-native";
import { ButtonTextAppointmentStyle } from "../AbsListAppointment/AbsListAppointment";
import { InputLabel } from "../Label/Label";
import { InputBox } from "../InputBox/InputBoxIndex";
import {
  AbsListAppointment,
  AbsTypeAppointment,
} from "../AbsListAppointment/AbsListAppointmentIndex";
import { FilterAppointment } from "../FilterAppointment/FilterAppointment";

export const CancelationModal = ({ visible, setShowModal, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="slide">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar Consulta</Title>

          <SubtitleBox>
            <Subtitle>
              Ao cancelar essa consulta, abrirá uma possível disponibilidade no
              seu horário, deseja mesmo cancelar essa consulta?
            </Subtitle>
          </SubtitleBox>

          <ModalButton>
            <ButtonTitle>Confirmar</ButtonTitle>
          </ModalButton>

          <ModalCancelButton onPress={() => setShowModal(false)}>
            <ModalButtonTitle>Cancelar</ModalButtonTitle>
          </ModalCancelButton>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

const arr = ["22 anos", "ramonadina@gmail.com"];

export const AppointmentModal = ({ visible, setShowModal, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="slide">
      <PatientModal>
        <ModalContent>
          <ModalImage source={PatientImage} />

          <InfoBox username={"Ramona Dina"} infoArr={arr}></InfoBox>

          <ModalButton>
            <ButtonTitle>Inserir Prontuário</ButtonTitle>
          </ModalButton>

          <ModalCancelButton onPress={() => setShowModal(false)}>
            <ModalButtonTitle>Cancelar</ModalButtonTitle>
          </ModalCancelButton>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

export const SchedulePatientModal = ({ visible, setShowModal, ...rest }) => {
  return (
    <ScheduleModal
      {...rest}
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <PatientModal2>
        <ModalContent2>
          <Title>Agendar Consulta</Title>

          <InputLabel>Qual o nível da consulta</InputLabel>

          <FilterAppointment>
            <AbsTypeAppointment textButton={"Rotina"} />
            <AbsTypeAppointment textButton={"Exame"} />
            <AbsTypeAppointment textButton={"Urgência"} />
          </FilterAppointment>

          <Button>
            <ButtonTitle>Continuar</ButtonTitle>
          </Button>
          
          <ModalCancelButton onPress={() => setShowModal(false)}>
            <ModalBlueTitle>Cancelar</ModalBlueTitle>
          </ModalCancelButton>

        </ModalContent2>
      </PatientModal2>
    </ScheduleModal>
  );
};
