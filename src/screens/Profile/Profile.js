import { InfoImage } from "../../components/InfoImage/InfoImage";
import { ScrollContent } from "../../components/ScrollContent/ScrollContent";


import PerfilImage from '../../../assets/Perfil.png'

export const Profile = () => {
  return (
    <ScrollContent contentContainerStyle={{ alignItems: "center" }}>
      <InfoImage source={PerfilImage} />
    </ScrollContent>
  );
};
