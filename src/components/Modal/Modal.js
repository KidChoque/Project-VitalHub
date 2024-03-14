import styled from "styled-components";

export const Modal = styled.Modal`
width: 90%;
height: 310px;
border-radius: 10px;
background-color: "#FFFFFF";
align-items: center;

`
export const ModalMap = styled(Modal)`
width: 100%;
height: 200px;
background-color: transparent;
stroke: 5px #0000 ;
`


export const ScheduleModal = styled(Modal)`
width: 100%;
height: 518px;
background-color: aliceblue;
justify-content: flex-end
`

export const PatientModal = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.6);

`
export const PatientModal2 = styled.View`
flex: 1;
align-items: center;
justify-content: flex-end;
background-color: rgba(0,0,0,0.35);

`

export const ModalContent = styled.View`
width: 90%;
padding: 30px 30px 10px;
border-radius: 10px;
background-color: #fff;
align-items: center;
`
export const ModalContent2 = styled.View`
width: 100%;
height: 600px;
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