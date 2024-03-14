import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { InfoContainer } from "../Container/Container";
import { InfoView } from "./InfoBox";
import { View } from "react-native";

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

