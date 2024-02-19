import styled, { css } from "styled-components";



export const ButtonTabStyle = styled.TouchableHighlight`
padding: 12px 14px;
border-radius: 5px;

/* Condição para a cor do botão , se clickButton = true a cor será azul , senão  será transparent  */
${props => props.clickButton ? css`
 background-color: #496bba;
`: css`
   background-color: transparent;
   border: 2px solid #607ec5;
`}
`


export const ButtonText= styled.Text`
font-size: 12px;
font-family: "MontserratAlternates_600SemiBold"
/* Condição para a cor do texto, se clickButton = true a cor será branca , senão será azul */
${props => props.clickButton ? css`color:"#FBFBFB"` : css`color:"#607ec5"`}
;
`