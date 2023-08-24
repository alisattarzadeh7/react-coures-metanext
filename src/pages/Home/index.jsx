import AppButton from "../../components/AppButton.jsx";
import http from "../../config/http.js";
import {useEffect, useState} from "react";
import {Card, Col, Row, Spin} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getAllTodos} from "../../services/todo.service.js";
import DashboardChart from "./DashboardChart.jsx";



const Home = ()=>{


    const {data,isLoading,isFetching, errors } = useQuery(['todos'],getAllTodos)


    return (<div>
        <DashboardChart/>
        {
            isLoading && <Spin/>
        }
        {
            isFetching && <h1 style={{color:'red'}}> fetching data from server ...</h1>
        }
        <Row  gutter={[10,10]}>
        {
            data?.map((t,index)=>  <Col xs={24} md={12} lg={6}>
                <Link to={`todo/${t.id}`} key={t.id}>
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