import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";

export default function CreateManufacturerForm() {
    return (
        <DefaultForm title="제조사 생성" submitText="생성">
            <DefaultInput label="제조사명" name="name" />
        </DefaultForm>
    )
}