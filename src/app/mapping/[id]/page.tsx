'use client'

import DefaultForm from "@/components/DefaultForm";
import { mapResource } from "@/utils/action";
import { axiosInstance } from "@/utils/axiosInstance"
import { useActionState } from "react";

export default async function Mapping({params}: {params: Promise<{id: string}>}) {

    const { id } = await params

    const {data: part} = await axiosInstance.get(`/part/${id}`);

    const { data:locationData } = await axiosInstance.get('/location');
    const { data:categoryData } = await axiosInstance.get('/category');
    const { data:manufacturerData } = await axiosInstance.get('/manufacturer');

    const [state, formAction, isPending] = useActionState(mapResource, {message: ''})

    return (
        <DefaultForm title={'리소스 매핑'} submitText={'등록'} formAction={formAction} isPending={isPending}>
            <div>
                <label htmlFor="part">파트</label>
                <select name="part" id="part">
                <option value={id}>{part.part_name}</option>
                </select>
            </div>
            <div>
                <label htmlFor="location">위치</label>
                <select name="location" id="location">
                {locationData.map((location:any) => (
                    <option key={location.id} value={location.id}>{location.large_location + ' - ' + location.small_location}</option>
                ))}
                </select>
            </div>
            <div>
                <label htmlFor="category">카테고리</label>
                <select name="category" id="category">
                {categoryData.map((category:any) => (
                    <option key={category.id} value={category.id}>{category.large_category + ' - ' + category.small_category}</option>
                ))}
                </select>
            </div>
            <div>
                <label htmlFor="manufacturer">제조사</label>
                <select name="manufacturer" id="manufacturer">
                {manufacturerData.map((manufacturer: any) => (
                    <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                ))}
                </select>
            </div>
        </DefaultForm>
    )
    
}