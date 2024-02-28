import { ButtonTabAppointmentStyle, ButtonTabStyle, ButtonTextAppointmentStyle, ButtonTextStyle } from "./AbsListAppointment"


export const AbsListAppointment = ({textButton, clickButton = false, onPress}) =>{

    return(

        <ButtonTabStyle clickButton={clickButton} onPress={onPress} >

            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>

        </ButtonTabStyle>
    )
}
export const AbsTypeAppointment = ({textButton, clickButton = false, onPress}) =>{

    return(

        <ButtonTabAppointmentStyle clickButton={clickButton} onPress={onPress} >

            <ButtonTextAppointmentStyle clickButton={clickButton}>{textButton}</ButtonTextAppointmentStyle>

        </ButtonTabAppointmentStyle>
    )
}