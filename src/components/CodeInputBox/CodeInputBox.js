import styled from "styled-components";

export const CodeInputBox = styled.View`

width: 80%;
justify-content: space-evenly;
flex-direction: row;
margin-bottom: 5%;

`

export const CodeInput = styled.TextInput.attrs({
    placeholderTextColor: `#34898F`
})`
width: 20%;
height: 62px;
padding: 16px;
margin-top: 5%;
border: 2px solid #49B3BA;
border-radius:5px;
color: #34898F;
font-size:16px;
font-family:'MontserratAlternates_600SemiBold'
`