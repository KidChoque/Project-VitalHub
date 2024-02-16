import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { InfoContainer } from "../Container/Container";

export default function InfoBox({ username,infoArr = [] }) {
  return (
    <InfoContainer>
      <Title>{username}</Title>


      {infoArr.map((text, index) => (
        <Subtitle key={index}>{text}</Subtitle>
      ))}


    </InfoContainer>
  );
}
