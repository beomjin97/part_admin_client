import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";

export default function LoginForm() {
    return (
        <DefaultForm  title="로그인" submitText="로그인">
          <DefaultInput label="아이디" name="user_id" />
          <DefaultInput label="패스워드" name="password" />
        </DefaultForm>
    )
}