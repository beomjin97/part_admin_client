'use server'

import { axiosInstance } from "@/utils/axiosInstance";


type FormState = {
    message: string;
}

export async function signin(initialState: FormState, formData:FormData):Promise<FormState> {
    const user_id = formData.get('email');
    const password = formData.get('password');
    
    let message = ''
    
    try {
        const response = await axiosInstance.post('/account/signin', {user_id, password})
        message = 'login success';
    } catch (error:any) {
        message = error.response.data.message
    }

    return { message }

}

export async function createPart(initialState: FormState, formData: FormData) {
    const part_name = formData.get('part_name');
    const part_number = formData.get('part_number');
    const compatible_equipment = formData.get('compatible_equipment');
    const note = formData.get('note');

    let message = '';

    try {
        const response = await axiosInstance.post('/part', {part_name, part_number, compatible_equipment, note});
        message = 'creation success'
    } catch (error:any) {
        message = error.response.data.message;
    }

    return {message};
}

export async function createLocation(initialState: FormState, formData: FormData) {
    const small_location = formData.get('small_location');
    const large_location = formData.get('large_location');

    let message = '';

    try {
        const response = await axiosInstance.post('/location', {small_location, large_location});
        message = 'creation success';
    } catch (error:any) {
        message = error.response.data.message;
    }

    return {message}
}

export async function createCategory(initialState: FormState, formData: FormData) {
    const small_category = formData.get('small_category');
    const large_category = formData.get('large_category');

    let message = '';

    try {
        const response = await axiosInstance.post('/category', {small_category, large_category});
        message = 'creation success';
    } catch (error:any) {
        message = error.response.data.message;
    }

    return {message}
}

export async function createManufacturer(initialState: FormState, formData: FormData) {
    const name = formData.get('name');

    let message = '';

    try {
        const response = axiosInstance.post('/manufacturer', {name});
        message = 'creation success'
    } catch (error:any) {
        message = error.response.data.message;
    }

    return {message}
}

export async function createHistory(initialState: FormState, formData: FormData) {
    const count = formData.get('count');
    const is_import = formData.get('is_import');
    const date = formData.get('date');
    const part_id = initialState.message;

    let message = '';

    try {
        const response = await axiosInstance.post('/history', {
            count,
            is_import,
            date,
            part_id
        })
        message = 'creation success'

    } catch (error:any) {
        message = error.response.data.message;
    }

    return {message}
}

export async function mapResource(initialState: FormState, formData: FormData) {
    const part_id= formData.get('part');
    const location_id= formData.get('location');
    const manufacturer_id= formData.get('manufacturer');
    const category_id= formData.get('category');

    let message = ''

    try {
        const response = await axiosInstance.patch(`/part/mapping/${part_id}`, {
            location_id,
            manufacturer_id,
            category_id
        });
    } catch (error:any) {
        message = error.response.data.message;
    }

    return {message}
    
}