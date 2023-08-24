import http from "../config/http.js";


export const getAllTodos = async ()=>{
   const {data} =  await http.get('todos')
    return data
}


export const getTodoById = async (id)=>{
    const {data} = await http.get(`todos/${id}`)
    return data
}