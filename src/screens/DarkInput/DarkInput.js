import styled from "styled-components";

export const DarkInput = styled.TextInput`

width: 80%;
height: 53px;
padding: 16px;
margin-top: 5%;
border: #EDEDED;
font-size: 14px;
font-family: "MontserratAlternates_500Medium";
background-color: #EDEDED;

`

export const TinyInput = styled(DarkInput)`
position: fixed;
right: 22%;
width: 35%;


`
export const TinyInput2 = styled(TinyInput)`
left: 22%;

`