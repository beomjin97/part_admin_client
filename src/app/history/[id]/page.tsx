'use client'

import DefaultForm from "@/components/DefaultForm"
import DefaultInput from "@/components/DefaultInput"
import { createHistory } from "@/utils/action"
import { axiosInstance } from "@/utils/axiosInstance"
import { useActionState } from "react"

export default async function History({params}: {params: Promise<{id: string}>}) {
    
    const { id } = await params
    const { data } = await axiosInstance.get(`part/${id}`);

    const [state, formAction, isPending] = useActionState(createHistory, {message: id})
    
    
    return (
        <>
            <div>history/{id}</div>
            <DefaultForm title="기록 추가" submitText="추가" formAction={formAction} isPending={isPending}>
                <DefaultInput label="수량" name="count" type="number"/>
                <DefaultInput label="반출" name="is_import" type="radio" value={true}/>
                <DefaultInput label="반입" name="is_import" type="radio" value={false}/>
                <DefaultInput label="날짜" name="date" type="date"/>
            </DefaultForm>
                <table className="mx-auto border">
                    <thead>
                    <tr>
                        <th className="px-10 border">반출입</th>
                        <th className="px-10 border">수량</th>
                        <th className="px-10 border">시간</th>
                        <th className="px-16 border">작성자</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.histories.map((history:any) => 
                        <tr className="text-center" key={history.id}>
                        <td className="border">{history.is_import ? '반입' : '출입'}</td>
                        <td className="border">{history.count}</td>
                        <td className="border">{new Date(history.date).toLocaleDateString('ko')}</td>
                        <td className="border">{history.account.user_id}</td>
                        </tr>
                    )}
                    </tbody>
                </table>

        </>
    )
}