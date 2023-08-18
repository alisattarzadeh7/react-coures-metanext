import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import http from "../../config/http.js";
import {Button, Spin} from "antd";
import useRequestData from "../../hooks/useRequestData.jsx";
import useIsRtl from "../../hooks/useIsRtl.jsx";


const Todo = ()=>{

    const {id} = useParams()
    const navigate = useNavigate()

    const  { data:todoDetail,loading } = useRequestData(`todos/${id}`)
    const isRtl = useIsRtl()

    const handleRedirectBack  = ()=>{
        navigate('/')
    }

    return <div>

        {
            isRtl ? 'asdfasdf' : 'asdfasdf'
        }
        <Button onClick={handleRedirectBack}>back</Button>
        <div>
        {
            todoDetail && <>
            <p>
                {todoDetail.title}
            </p>
            <p>
                {todoDetail.completed ? 'this task is done !!' : 'not yet done' }
            </p>
            </>
        }
        </div>
        {
            loading && <Spin />
        }


    </div>
}

export default Todo