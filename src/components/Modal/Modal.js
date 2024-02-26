import styled from "styled-components";

export const Modal = styled.Modal`
width: 90%;
height: 310px;
border-radius: 10px;
background-color: "#FFFFFF";
align-items: center;
`
export const ScheduleModal = styled(Modal)`
height: 518px;
justify-content: flex-end
`

export const PatientModal = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.6);

`

export const ModalContent = styled.View`
width: 90%;
padding: 30px 30px 10px;
border-radius: 10px;
background-color: #fff;
align-items: center;
`

export const ModalImage = styled.Image`
width: 80%;
height: 181;
border-radius: 10px;

`