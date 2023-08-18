import AppButton from "../../components/AppButton.jsx";
import http from "../../config/http.js";
import {useEffect, useState} from "react";
import {Card, Col, Row} from "antd";
import {Link, useNavigate} from "react-router-dom";


const Home = ()=>{

    const [todos,setTodos] = useState([])

    const getTodos = async ()=>{
        const {data:result} = await http.get('todos')
        // const result = (await http.get('todos'))?.data
        setTodos(result)
    }

    useEffect(()=>{
        getTodos()
    },[])




    return (<div>
        <Row  gutter={[10,10]}>
        {
            todos?.map((t)=>  <Col xs={24} md={12} lg={6}>
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
        <AppButton danger>submit</AppButton>
    </div>)
}


export default Home