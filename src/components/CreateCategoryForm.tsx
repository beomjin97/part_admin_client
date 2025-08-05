'use client'

import { useActionState } from "react";
import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";
import { createCategory } from "@/utils/action";

export default function CreateCategoryForm() {
    const [state, formAction, isPending] = useActionState(createCategory, {message: ''});

    return (
        <DefaultForm title="카테고리 생성" submitText="생성" formAction={formAction} isPending={isPending}>
            <DefaultInput label="대분류" name="large_category" required/>
            <DefaultInput label="소분류" name="small_category" />
        </DefaultForm>
    )
}