import { Title } from "../Title/Title";
import { Subtitle, SubtitleBox } from "../Subtitle/Subtitle";
import {
  ButtonTitle,
  ModalButton,
  ModalButtonTitle,
  ModalCancelButton,
} from "../Button/Button";

import { Modal, ModalContent, ModalImage, PatientModal } from "./Modal";

import PatientImage from '../../../assets/User.png'
import InfoBox from "../InfoBox/InfoIndex";

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

          <ModalCancelButton onPress={() => (setShowModal(false) )}>
            <ModalButtonTitle>Cancelar</ModalButtonTitle>
          </ModalCancelButton>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

const arr = ["22 anos", "ramonadina@gmail.com"];

export const AppointmentModal = ({ visible, setShowModal, ...rest}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="slide">
      <PatientModal>
        <ModalContent>
          <ModalImage source={PatientImage}/>

          <InfoBox username={"Ramona Dina"} infoArr={arr}></InfoBox>

          <ModalButton>
            <ButtonTitle>Inserir Prontuário</ButtonTitle>
          </ModalButton>

          <ModalCancelButton onPress={() => (setShowModal(false))}>
            <ModalButtonTitle>Cancelar</ModalButtonTitle>
          </ModalCancelButton>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};

export const SchedulingModal = ({visible,setShowModal,...rest}) =>{

return(

  <Modal {...rest} visible={visible} transparent={true}
  
  ></Modal>
)
}