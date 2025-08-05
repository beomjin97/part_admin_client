'use client'

import { useActionState } from "react";
import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";
import { signin } from "@/utils/action";

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(signin, {message: ''})

    return (
        <DefaultForm  title="로그인" submitText="로그인" formAction={formAction} isPending={isPending}>
          <DefaultInput label="아이디" name="user_id" />
          <DefaultInput label="패스워드" name="password" />
        </DefaultForm>
    )
}