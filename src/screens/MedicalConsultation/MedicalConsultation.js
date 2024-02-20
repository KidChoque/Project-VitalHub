// import { useState } from "react"
import { AppointmentCard } from "../../components/AppointmentCard/AppoitmentCardIndex"
import Calendar from "../../components/Calendar/CalendarIndex"
import { Container } from "../../components/Container/Container"
import Header from "../../components/Header/HeaderIndex"
import { ListComponent } from "../../components/List/List"






export const MedicalConsultation = () => {

    // const [statusList,setStatusList]= useState("pendente")

    return(

        <Container>

            <Header/>

            <Calendar/>

           

            <ListComponent 
                data={Consultas}
                keyExtractor={(item) => item.id}
                
                renderItem={({item}) => statusLista == item.situacao && (
                    <AppointmentCard situacao={item.situacao}/>
                )}
           
                

            />
           



            
        </Container>
    )
}