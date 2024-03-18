import { Title } from "../Title/Title";
import { Subtitle, SubtitleBox } from "../Subtitle/Subtitle";
import {
  Button,
  ButtonTitle,
  ModalBlueTitle,
  ModalButton,
  ModalButtonTitle,
  ModalCancelButton,
  ScheduleBtn,
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
import DoctorImage from "../../../assets/Doctor.png";
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
import { Input } from "../Input/Input";
import { handleCallNotifications } from "../Nofication/NotificationIndex";

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

          <ModalButton onPress={handleCallNotifications}>
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

const arr1 = ["Cliníco geral", "CRM-15286"];

export const DoctorModal = ({ navigation , visible, setShowModal, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="slide">
      <PatientModal>
        <ModalContent>
          <ModalImage source={DoctorImage} />

          <InfoBox username={"Ran Chucrutes"} infoArr={arr}></InfoBox>

          <ModalButton onPress={() => navigation.navigate("ConsultationLocation")}>
            <ButtonTitle>Ver Local da Consulta</ButtonTitle>
          </ModalButton>

          <ModalCancelButton onPress={() => setShowModal(false)}>
            <ModalButtonTitle>Cancelar</ModalButtonTitle>
          </ModalCancelButton>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

export const SchedulePatientModal = ({ navigation,visible, setShowModal, ...rest }) => {
  return (
    <ScheduleModal
      {...rest}
      visible={visible}
      transparent={true}
      animationType="slide"
    >

      {/* Função com navigation replace para o Select CLinic */}

      <PatientModal2>
        <ModalContent2>
          <Title>Agendar Consulta</Title>

        
          <InputLabel>Qual o nível da consulta</InputLabel>

          <FilterAppointment>
            <AbsTypeAppointment textButton={"Rotina"} />
            <AbsTypeAppointment textButton={"Exame"} />
            <AbsTypeAppointment textButton={"Urgência"} />
          </FilterAppointment>

          <InputLabel>Informe a Localização Desejada</InputLabel>
          <Input placeholder={"Informe a localização"}></Input>


          <ScheduleBtn
          // COLOCAR A FUNÇÃO AQUI
          >
            <ButtonTitle>Continuar</ButtonTitle>
          </ScheduleBtn>
          
          <ModalCancelButton onPress={() => setShowModal(false)}>
            <ModalBlueTitle>Cancelar</ModalBlueTitle>
          </ModalCancelButton>

        </ModalContent2>  
      </PatientModal2>
    </ScheduleModal>
  );
};

export const ConfirmDateInfo =({ visible, setShowModal, ...rest }) => {
  return(
    <Modal {...rest} visible={visible} transparent={true} animationType="slide">
    <PatientModal>
      <ModalContent>
        <Title>Agendar Consulta</Title>

        <InputLabel>Data da consulta</InputLabel>
          <Input placeholder={"Informe a localização"}></Input>

          <InputLabel>Médico(a) da consulta</InputLabel>
          <Input placeholder={"Informe a localização"}></Input>

          <InputLabel>Local da consulta</InputLabel>
          <Input placeholder={"Informe a localização"}></Input>

          <InputLabel>Tipo da consulta</InputLabel>
          <Input placeholder={"Informe a localização"}></Input>
        {/* <SubtitleBox>
          <Subtitle>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </Subtitle>
        </SubtitleBox> */}

        <ModalButton>
          <ButtonTitle>Confirmar</ButtonTitle>
        </ModalButton>

        <ModalCancelButton onPress={() => setShowModal(false)}>
          <ModalButtonTitle>Cancelar</ModalButtonTitle>
        </ModalCancelButton>
      </ModalContent>
    </PatientModal>
  </Modal>
  )
}
