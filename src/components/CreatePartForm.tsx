import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";


export default function CreatePartForm() {
    return (
     <DefaultForm title="파트 생성" submitText="생성">
      <DefaultInput label="파트명" name="part_name" />
      <DefaultInput label="파트 넘버" name="part_number" />
      <DefaultInput label="호환 장비" name="compatible_equipment" />
      <DefaultInput label="메모" name="note" />
     </DefaultForm> 
    )
}