'use client'

import { useActionState } from "react";
import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";
import { createLocation } from "@/utils/action";

export default function CreateLocationForm() {
    const [state, formAction, isPending] = useActionState(createLocation, {message: ''});

    return (
        <DefaultForm title="보관 위치 생성" submitText="생성" formAction={formAction} isPending={isPending}>
            <DefaultInput label="보관 장소" name="large_location" required/>
            <DefaultInput label="상세 위치" name="small_location" />
        </DefaultForm>
    )
}