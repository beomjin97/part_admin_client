'use client'

import { useActionState } from "react";
import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";
import { createManufacturer } from "@/utils/action";

export default function CreateManufacturerForm() {
    const [state, formAction, isPending] = useActionState(createManufacturer, {message: ''})

    return (
        <DefaultForm title="제조사 생성" submitText="생성" formAction={formAction} isPending={isPending}>
            <DefaultInput label="제조사명" name="name" required/>
        </DefaultForm>
    )
}