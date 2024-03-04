import { useState } from "react"
import { ClinicCard } from "../../components/ClinicCard/ClinicCardIndex"
import { Container, ContainerClinic } from "../../components/Container/Container"
import { Title } from "../../components/Title/Title"
import { FlatListClinic } from "../../components/FlatilistClinic/FlatlistClinic"
import { ButtonTitle,Button ,ModalBlueTitle, ModalCancelButton } from "../../components/Button/Button"

import drImage1 from "../../../assets/Dr1.png"
import drImage2 from "../../../assets/Dr2.png"
import drImage3 from "../../../assets/Dr3.png"
import { DrSelectionCard } from "../../components/AppointmentCard/AppointmentCard"


export const SelectDoctor = () => {

   const Doctors =[

    {
        doctorName: "Dra. Serfis",
        drImg: drImage1,
        medicalSpecialty:"Dermatóloga,Estecista"
    },
    {
        doctorName: "Dr. Sanches",
        drImg: drImage2,
        medicalSpecialty:"Dermatóloga,Estecista"
    },
    {
        doctorName: "Dr. Lucas",
        drImg: drImage3,
        medicalSpecialty:"Dermatóloga,Estecista"
    },
  

   

   ]


  const [select, setSelect] = useState('')

    return(
        
        <ContainerClinic>


            <Title>Selecionar Medico</Title>


            <FlatListClinic
            
            data={Doctors}
            renderItem={({item}) =>

            <DrSelectionCard 
            select={select}
            onPress={() => setSelect(item.doctorName)}
            medicalSpecialty={item.medicalSpecialty}
            doctorName={item.doctorName}
            drImg={item.drImg}
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