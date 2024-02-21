// import { useState } from "react"
import { useState } from "react";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointmentIndex";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";

import Calendar from "../../components/Calendar/CalendarIndex";
import { Container } from "../../components/Container/Container";
import { FilterAppointment } from "../../components/FilterAppointment/FilterAppointment";
import Header from "../../components/Header/HeaderIndex";
import { ListComponent } from "../../components/List/List";

const Consultas = [
  { id: 1, nome: "Lucas", situacao: "pendente" },
  { id: 2, nome: "Lucas", situacao: "realizado" },
  { id: 3, nome: "Lucas", situacao: "cancelado" },
  { id: 4, nome: "Lucas", situacao: "realizado" },
  { id: 5, nome: "Lucas", situacao: "cancelado" },
];

export const MedicalConsultation = () => {

  const [statusList, setStatusList] = useState("pendente");

  const [modalVisible,setModalVisible] = useState("false")

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
            <AppointmentCard situacao={item.situacao} />
          )
        }
      />
    </Container>
  );
};
