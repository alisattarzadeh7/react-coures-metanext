import AppButton from "../../components/AppButton.jsx";
import http from "../../config/http.js";
import {useEffect, useState} from "react";
import {Card, Col, Row, Spin} from "antd";
import {Link, useNavigate} from "react-router-dom";
import useRequestData from "../../hooks/useRequestData.jsx";



const Home = ()=>{


    const {data,isLoading,isFetching, errors } = useQuery('todos',()=>http.get('todos'))


    return (<div>
        {
            isLoading && <Spin/>
        }
        <Row  gutter={[10,10]}>
        {
            data?.map((t)=>  <Col xs={24} md={12} lg={6}>
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