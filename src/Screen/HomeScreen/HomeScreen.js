import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Categoriesbar from '../../Components/Categoriesbar/Categoriesbar';
import Video from '../../Components/Video/Video';
import './HomeScreen.scss';
// import { useDispatch } from 'react-redux';
// import { getPopularVideos } from '../../redux/actions/videos.action';
const HomeScreen = () => {
   const array = [...new Array(20)];
//    const dispatch = useDispatch();
//    useEffect(()=>{
//        dispatch(getPopularVideos())
//    },[dispatch])
    return (
        
        <Container>
            <Categoriesbar/>
            <Row className="row">
                {
                    
                    array.map(() =>
                        <Col lg={3} md={4}>
                            <Video />
                        </Col>
                    )
                }
            </Row>
        </Container>
        
    );
};

export default HomeScreen;