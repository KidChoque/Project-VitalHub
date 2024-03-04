import { useState } from "react"
import { ClinicCard } from "../../components/ClinicCard/ClinicCardIndex"
import { Container, ContainerClinic } from "../../components/Container/Container"
import { Title } from "../../components/Title/Title"
import { FlatListClinic } from "../../components/FlatilistClinic/FlatlistClinic"
import { ButtonTitle,Button ,ModalBlueTitle, ModalCancelButton } from "../../components/Button/Button"


export const SelectClinic = () => {

   const Clinics =[

    {
        clinicName: "Clinica Serfis",
        cityState: "Mauá, SP",
        review:"4,5",
        weekdays:"Segu-Sab"
    },
    {
        clinicName: "Clinica Gersin",
        cityState: "Santo André, SP",
        review:"4,5",
        weekdays:"Segu-Sab"
    },
    {
        clinicName: "Clinica Itaquaquisetuba",
        cityState: "Mauá, SP",
        review:"4,5",
        weekdays:"Segu-Sab"
    },
    {
        clinicName: "Clinica Travis Scott",
        cityState: "Salvador, BA",
        review:"4,5",
        weekdays:"Segu-Dom"
    },
    {
        clinicName: "Clinica do Malvadao",
        cityState: "Mauá, SP",
        review:"5,0",
        weekdays:"Segu-Sab"
    }


   ]


  const [select, setSelect] = useState('')

    return(
        
        <ContainerClinic>


            <Title>Selecionar Clínica</Title>

            <FlatListClinic
            
            data={Clinics}
            renderItem={({item}) =>

            <ClinicCard 
            select={select}
            onPress={() => setSelect(item.clinicName)}
            review={item.review}
            cityState={item.cityState}
            clinicName={item.clinicName}
            weekDays={item.weekdays}
            />
                
           
        
        
        
            }
            >


            </FlatListClinic>
 

            <Button><ButtonTitle>Continuar</ButtonTitle></Button>


            <ModalCancelButton>
            <ModalBlueTitle>Cancelar</ModalBlueTitle>
          </ModalCancelButton>

 
        </ContainerClinic>
     )

}