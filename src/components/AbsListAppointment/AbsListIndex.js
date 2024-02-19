import { ButtonTabStyle, ButtonText } from "./AbsList"


export const AbsListAppointment = (buttonText,clickButton = false,onPress) => {
    return(

        <ButtonTabStyle clickButton={clickButton} onPress={onPress}>

                <ButtonText clickButton={clickButton}>{buttonText}</ButtonText>

        </ButtonTabStyle>
    )
}   