import { EntryField } from "../EntryField";
import { FormField } from "../FormField";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";

export function EventForm() {
  return (
    <form>
      <div className="bg-[#212121] py-8 px-7 rounded-2xl w-[384px] my-16 mx-auto">
        <TitleForm>Preencha para criar um evento:</TitleForm>
        <FormField>
          <Label htmlFor="name">Qual o nome do evento?</Label>
          <EntryField type="text" id="name" placeholder="Summer dev hits" />
        </FormField>
      </div>
    </form>
  );
}
