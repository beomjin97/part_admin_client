import DefaultForm from "@/components/DefaultForm"
import DefaultInput from "@/components/DefaultInput"

export default async function History({params}: {params: Promise<{id: string}>}) {
    
    const {id} = await params
    
    return (
        <>
        <div>history/{id}</div>
        <DefaultForm title="기록 추가" submitText="추가">
            <DefaultInput label="수량" name="count" type="number"/>
            <DefaultInput label="반출" name="is_import" type="radio" value={true}/>
            <DefaultInput label="반입" name="is_import" type="radio" value={false}/>
            <DefaultInput label="날짜" name="date" type="date"/>
        </DefaultForm>
        </>
    )
}