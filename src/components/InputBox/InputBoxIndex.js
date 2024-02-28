import { Input } from "../Input/Input";
import { Label } from "../Label/LabelIndex";
import { FieldContent } from "./InputBox";

export const InputBox = (labelText) => {
  return (
    <FieldContent>

      <Label textLabel={labelText}/>

      <Input placeholder={placeholder}></Input>

    </FieldContent>
  );
};


