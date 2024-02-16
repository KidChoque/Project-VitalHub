import { InfoImage } from "../../components/InfoImage/InfoImage";
import { ScrollContent } from "../../components/ScrollContent/ScrollContent";

import ProfileImage from "../../../assets/Perfil.png";
import InfoBox from "../../components/InfoBox/InfoIndex";
import { Label } from "../../components/Label/LabelIndex";

import { Cep, Cidade, DarkInput } from "../DarkInput/DarkInput";
import { InfoContainer } from "../../components/Container/Container";
import { InfoView, MiniBox, RowInput } from "../../components/InfoBox/InfoBox";
import { Button, ButtonTitle } from "../../components/Button/Button";

export const Profile = () => {
  return (
    <ScrollContent contentContainerStyle={{ alignItems: "center" }}>
      <InfoImage source={ProfileImage} />
      <InfoBox
        infoArr={["richard.kosta@gmail.com"]}
        username={"Richard Kosta"}
      />

      <Label textLabel={"Data de Nascimento"} />
      <DarkInput placeholder={"dd/mm/aa"} />

      <Label textLabel={"CPF"} />
      <DarkInput placeholder={"000********"} />

      <Label textLabel={"Endereço"} />
      <DarkInput placeholder={"Rua..."} />

    {/* <RowInput>

      <MiniBox>
        <Label textLabel={"Cep"} />
        <Cep placeholder={"00000-000"} />
      </MiniBox>

      <MiniBox>
        <Label textLabel={"Cidade"} />
        <Cidade placeholder={"Nome de cidade"} />
      </MiniBox>

    </RowInput> */}

<Button>
  <ButtonTitle>Salvar</ButtonTitle>
</Button>
<Button>
  <ButtonTitle>Editar</ButtonTitle>
</Button>

    </ScrollContent>
  );
};
