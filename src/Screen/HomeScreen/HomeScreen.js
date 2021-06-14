import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Categoriesbar from '../../Components/Categoriesbar/Categoriesbar';
import Video from '../../Components/Video/Video';
import './HomeScreen.scss';
import { userContext } from '../../App';

const HomeScreen = () => {
    const {value2} = useContext(userContext);
   const [videos, setVideos]= value2;
//    console.log('videos',videos);


    return (
        
        <Container>
            <Categoriesbar/>
            {videos?<Row className="row">
                {
                    
                    videos?.map((video) =>
                        {
                            
                        return(<Col lg={3} md={4} key={video.id}>
                            <Video video={video} />
                        </Col>)
                        }
                    )
                }
            </Row>:
            <h3 className="text-center mt-5 text-danger">Api Limit Exceeded! Please Come And Visit Tomorrow!</h3>
            }
        </Container>
        
    );
};

export default HomeScreen;