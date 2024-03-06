import styled from "styled-components";

export const LinkMedium = styled.Text`
 font-size: 14px;
 font-family: 'MontserratAlternates_500Medium';
 color: #8C8A97;
 margin: 5%;
 align-self: flex-start;
 text-decoration: underline;
 /* border-bottom: #7A7786; */
 background-color: transparent;

`

export const LinkAccount = styled(LinkMedium)`
color: #4D659D;
`

export const CancelLink = styled(LinkAccount)`
 align-self: center;
`