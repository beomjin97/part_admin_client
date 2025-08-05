'use client'

import { useActionState } from "react";
import DefaultForm from "./DefaultForm";
import DefaultInput from "./DefaultInput";
import { createPart } from "@/utils/action";


export default function CreatePartForm() {
    const [state, formAction, isPending] = useActionState(createPart, {message: ''})

    return (
     <DefaultForm title="파트 생성" submitText="생성" formAction={formAction} isPending={isPending}>
      <DefaultInput label="파트명" name="part_name" required/>
      <DefaultInput label="파트 넘버" name="part_number" />
      <DefaultInput label="호환 장비" name="compatible_equipment" />
      <DefaultInput label="메모" name="note" />
     </DefaultForm> 
    )
}