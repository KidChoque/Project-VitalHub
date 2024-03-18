// import { useState } from "react"
import { useState } from "react";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointmentIndex";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";

import Calendar from "../../components/Calendar/CalendarIndex";
import { Container } from "../../components/Container/Container";
import { FilterAppointment } from "../../components/FilterAppointment/FilterAppointment";
import Header from "../../components/Header/HeaderIndex";
import { ListComponent } from "../../components/List/List";
import { AppointmentModal, CancelationModal, DoctorModal, SchedulePatientModal } from "../../components/Modal/ModalIndex";

import DrImage from "../../../assets/Doctor.png"
import { IconButton, ScheduleButtonView } from "../../components/Button/Button";

import { FontAwesome6 } from '@expo/vector-icons';




const Consultas = [
  { id: 1, nome: "Lucas", situacao: "pendente" },
  { id: 2, nome: "Lucas", situacao: "realizado" },
  { id: 3, nome: "Lucas", situacao: "cancelado" },
  { id: 4, nome: "Lucas", situacao: "realizado" },
  { id: 5, nome: "Lucas", situacao: "cancelado" },
];

export const PatientConsultation = ({navigation}) => {

  const [statusList, setStatusList] = useState("pendente");

  const [showModalCancel, setModalVisible] = useState(false);
  const [showModalAppointment, setModalVision] = useState(false);
  const [showModalSchedule, setShowModalSchedule] = useState(false);
  const [showModalDoctor, setShowModalDoctor] = useState(false);

  return (
    <Container>
      
      <Header />

      <Calendar />

      <FilterAppointment>
        <AbsListAppointment
          textButton={"Agendadas"}
          clickButton={statusList === "pendente"}
          onPress={() => setStatusList("pendente")}
        />
        <AbsListAppointment
          textButton={"Realizados"}
          clickButton={statusList === "realizado"}
          onPress={() => setStatusList("realizado")}
        />
        <AbsListAppointment
          textButton={"Cancelados"}
          clickButton={statusList === "cancelado"}
          onPress={() => setStatusList("cancelado")}
        />
      </FilterAppointment>

      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusList == item.situacao && (
            <AppointmentCard  name={"Dr.Ran Chucrutes"} appointmentHour={"15:00"} age={"33 anos"} img={DrImage} situacao={item.situacao} 
             onPressCancel={() => setModalVisible(true) }
             onPressAppointment={() => setModalVision(true)}
             onPressCard={() => setShowModalDoctor(true) }
            
            />
            


          )
        }
      />

<ScheduleButtonView>

      <IconButton onPress={() => setShowModalSchedule(true)}>


          <FontAwesome6 name="stethoscope" size={24} color="white" />
        

      </IconButton>

</ScheduleButtonView>
      

      <CancelationModal visible={showModalCancel} setShowModal={setModalVisible}/>

      <AppointmentModal visible={showModalAppointment} setShowModal={setModalVision}/>

      <SchedulePatientModal visible={showModalSchedule} setShowModal={setShowModalSchedule} navigation={navigation}/>  

      <DoctorModal  visible={showModalDoctor} setShowModal={setShowModalDoctor}/>


      {/* <BottomMenu/> */}

    </Container>
  );
};
