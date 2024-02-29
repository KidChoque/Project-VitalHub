import { ClinicCard } from "../../components/AppointmentCard/AppointmentCard"
import { Container } from "../../components/Container/Container"
import { Title } from "../../components/Title/Title"


export const SelectClinic = () => {

    return(
        <Container>


            <Title>Selecionar Clínica</Title>
 
            <ClinicCard clinicName={"Saleiro Clinic"}></ClinicCard>

            
 
        </Container>
     )

}