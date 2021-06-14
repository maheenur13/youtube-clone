import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Categoriesbar from '../../Components/Categoriesbar/Categoriesbar';
import Video from '../../Components/Video/Video';
import './HomeScreen.scss';
import { userContext } from '../../App';

const HomeScreen = () => {
    const {value2} = useContext(userContext);
   const [videos, setVideos]= value2;
   const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=40&key=AIzaSyALTUTy8yzda57TLdtPGoKFOgbDyjiuDTA";
   useEffect(() =>{
       fetch(url)
       .then(res=>res.json())
       .then(data=>{
           setVideos(data.items);
       })
   },[setVideos])

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