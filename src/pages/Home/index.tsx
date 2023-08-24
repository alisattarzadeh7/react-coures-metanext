import React, {useCallback, useDeferredValue, useEffect, useMemo, useRef, useState} from "react";
import {Trans, useTranslation} from "react-i18next";
import {Button, Card, Col, Input, Modal, Row, Spin} from 'antd';
import {Link} from "react-router-dom";
import {useTodosList} from "../../Utils/Queries/todo.queries.js";
import AddTodoDialog, {AddTodoDialogRefType} from "./components/AddTodoDialog.tsx";


const Home = () => {
    const [test,setTest] = useState(false)
    const [test2,setTest2] = useState(1)
    const deferredTest = useDeferredValue(test2)
    const {i18n, t} = useTranslation()
    const addTodoDialogRef = useRef<AddTodoDialogRefType>(null)
    const {data, isLoading,refetch} = useTodosList()
    const [chartData,setChartData] = useState('')

    useEffect(()=>{
        if(test){
            setChartData('ali')
        }
    },[test])


    useEffect(()=>{
        if(test2 === 2 && deferredTest === 10)
    },[test2])


    return (<div className="h-full">
        <div>
            {chartData}
        </div>

        <button onClick={()=>setTest(!test)}>change Test value</button>
        {test}
        <Button type="primary" className="mb-[10px]" onClick={()=>addTodoDialogRef.current?.openDialog()} >+</Button>

        {
            data && <Row gutter={[10, 10]}>
                {
                    data.map((t) => <Col xs={24} md={12} lg={6}>
                        <Link to={`todo/${t.id}`}>
                            <Card
                                title={t.title}
                                hoverable
                            >
                                <p>{t.title}</p>
                            </Card>
                        </Link>
                    </Col>)
                }
            </Row>
        }
        {
            isLoading && <div className="h-full w-full flex items-center justify-center"><Spin/></div>
        }
        <AddTodoDialog ref={addTodoDialogRef}  onAddTodo={refetch}  />
    </div>)
}


export default Home