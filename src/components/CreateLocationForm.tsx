import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";

export default function CreateLocationForm() {
    return (
        <DefaultForm title="보관 위치 생성" submitText="생성">
            <DefaultInput label="보관 장소" name="large_location" />
            <DefaultInput label="상세 위치" name="small_location" />
        </DefaultForm>
    )
}