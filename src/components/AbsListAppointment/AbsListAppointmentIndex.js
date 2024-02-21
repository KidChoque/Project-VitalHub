import { ButtonTabStyle, ButtonTextStyle } from "./AbsListAppointment"


export const AbsListAppointment = ({textButton, clickButton = false, onPress}) =>{

    return(

        <ButtonTabStyle clickButton={clickButton} onPress={onPress} >

            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>

        </ButtonTabStyle>
    )
}