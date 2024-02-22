
import { Title } from "../Title/Title"
import { Subtitle, SubtitleBox } from "../Subtitle/Subtitle"
import { ButtonTitle, ModalButton, ModalButtonTitle, ModalCancelButton } from "../Button/Button"

import { Modal, ModalContent, PatientModal } from "./Modal"

export const CancelationModal = ({visible,setShowModal,...rest}) =>{
    return(

        <Modal {...rest} visible={visible} transparent={true} animationType="slide">

            <PatientModal>

                <ModalContent>

                 <Title>Cancelar Consulta</Title>

                 <SubtitleBox>
                    <Subtitle>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</Subtitle>
                 </SubtitleBox>

                <ModalButton>
                    <ButtonTitle>Confirmar</ButtonTitle>
                    
                </ModalButton>

                <ModalCancelButton onPress={() => setShowModal=(!visible)}><ModalButtonTitle >Cancelar</ModalButtonTitle></ModalCancelButton>

                

                </ModalContent>

            </PatientModal>

        </Modal>
    )
}

export const AppointmentModal = ({}) => {

    return(

        <Modal {...rest} visible={visible} transparent={true} animationType="slide">

        <PatientModal>

            <ModalContent>

             <Title>Inserir Prontuário</Title>

             <SubtitleBox>
                <Subtitle>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</Subtitle>
             </SubtitleBox>

            <ModalButton>
                <ButtonTitle>Confirmar</ButtonTitle>
                
            </ModalButton>

            <ModalCancelButton onPress={() => setShowModal=(!visible)}><ModalButtonTitle >Cancelar</ModalButtonTitle></ModalCancelButton>

            

            </ModalContent>

        </PatientModal>

    </Modal>
    )
}