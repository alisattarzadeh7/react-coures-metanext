import {useQuery, UseQueryResult} from "@tanstack/react-query";
import http from "../../Config/http.ts";



type TodoType = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export const useTodosList = () :UseQueryResult<TodoType[]> => useQuery([],async ()=>{
    const {data} = await (http.get('todos'))
    return data
})
