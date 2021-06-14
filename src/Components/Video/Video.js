import React, { useEffect, useState } from 'react';
import './_video.scss';
import moment from 'moment';
import numeral from 'numeral';
// import { AiFillEve } from 'react-icons/ai';
const Video = ({video}) => {
    const [channelDetails, setChannelDetails] = useState([]);
    // console.log(video);
    const duration = video.contentDetails.duration;
    const views = video.statistics.viewCount;
    // console.log(duration);
    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");
    // console.log(_duration);
    // console.log(channelDetails);
    const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=AIzaSyALTUTy8yzda57TLdtPGoKFOgbDyjiuDTA`
   useEffect(() =>{
    fetch(channelUrl)
    .then(res=>res.json())
    .then(data=>{
        setChannelDetails(data?.items[0]);
    })
},[channelUrl])

    return (
        <div className="video">
            <div className="video-top">
                <img src={video?.snippet?.thumbnails?.high.url}  alt="" />
                <span>{_duration}</span>
            </div>
            <div className="video-title">
                {video.snippet.title}
            </div>
            <div className="video-channel">
                <img src={channelDetails?.snippet?.thumbnails?.high.url} alt="" />
                <div>
                    <p>{video.snippet.channelTitle}</p>
                    <span>
                        {numeral(views).format("0.a")} • {" "}
                    </span>
                    <span>{ moment(video.snippet.publishedAt).fromNow() }</span>
                </div>
            </div>





        </div>
    );
};

export default Video;