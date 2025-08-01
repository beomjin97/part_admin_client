import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";

export default function CreateCategoryForm() {
    return (
        <DefaultForm title="카테고리 생성" submitText="생성">
            <DefaultInput label="대분류" name="large_category" />
            <DefaultInput label="소분류" name="small_category" />
        </DefaultForm>
    )
}