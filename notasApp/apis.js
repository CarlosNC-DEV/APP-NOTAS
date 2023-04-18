import axios from 'axios';

const URL = "https://backend-notas.vercel.app/tareas"

export const traerTarea = async()=>{
    const respuesta = await axios.get(URL);
    return respuesta.data;
}

export const traerTareaUnica = async(id)=>{
    const respuesta = await axios.get(`${URL}/${id}`);
    return respuesta.data;
}

export const crearTareaApi = async({titulo, descripcion})=>{
    const respuesta = await axios.post(URL, { nombre: titulo, descripcion: descripcion });
    return respuesta.data;
}

export const eliminarTareaApi = async(id)=>{
    const respuesta = await axios.delete(`${URL}/${id}`);
    return respuesta.data;
}

export const editarTareaApi = async(id, titulo, descripcion)=>{
    const respuesta = await axios.put(`${URL}/${id}`, { nombre: titulo, descripcion:descripcion });
    return respuesta.data;
}