import {Button, Modal, Switch} from "antd";
import React, {useImperativeHandle, useState} from "react";
import AppInput from "../../../components/AppInput.tsx";
import { useForm } from 'react-hook-form';
import withTheme from "../../../HOC/withTheme.tsx";


export type AddTodoDialogRefType = {
    closeDialog:()=>void,
    openDialog:()=>void,
}


export type AddTodoDialogProps = {
    onAddTodo:()=>void
}

const AddTodoDialog:React.ForwardRefRenderFunction<AddTodoDialogRefType, AddTodoDialogProps> = ({onAddTodo,theme},ref)=>{

    console.log('hii')
    const [openAddDialog,setOpenAddDialog] = useState(false)
    const [isCompleted,setIsCompleted] = useState(false)
    const [title,setTitle] = useState('')
    const closeDialog = ()=>{
        setOpenAddDialog(false)
    }

    const openDialog = ()=>{
        setOpenAddDialog(true)
    }

    useImperativeHandle(ref,()=>({
        closeDialog,
        openDialog
    }))


    const handleAddTodo = (e:any)=>{
        e.preventDefault();
        localStorage.setItem('todo',JSON.stringify({title,completed:isCompleted}))
        closeDialog()
        onAddTodo()
    }

    return ( <Modal title="Add Todo Modal" open={openAddDialog} onCancel={()=>setOpenAddDialog(false)} footer={false} >
        <form onSubmit={handleAddTodo} className="flex flex-col items-start gap-4">
            <AppInput placeholder="title"  value={title} onChange={(e)=>setTitle(e.target.value)}  />
            <Switch checked={isCompleted} onChange={val=>setIsCompleted(val)} />
            <Button type="primary" htmlType="submit"  >submit</Button>
        </form>
    </Modal>)

}


export default withTheme(AddTodoDialog)