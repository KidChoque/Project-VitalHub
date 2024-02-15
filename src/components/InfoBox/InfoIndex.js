import { View } from "react-native";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";

export default function InfoBox({ username, infoArr = [] }) {
  return (
    <View>
      <Title>{username}</Title>

      {infoArr.map((index, text) => (
        <Subtitle key={index}>{text}</Subtitle>
      ))}
    </View>
  );
}
