import React from 'react';
import './_video.scss';
// import { AiFillEve } from 'react-icons/ai';
const Video = () => {
    return (
        <div className="video">
            <div className="video-top">
                <img src="https://i.ytimg.com/vi/7jMlFXouPk8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn_YU0FHCphaPCLSclDxJqFDy6pQ" alt="" />
                <span>06:12</span>
            </div>
            <div className="video-title">
                Pink Floyd - High Hopes (Official Music Video HD)
            </div>
            <div className="video-channel">
                <img src="https://yt3.ggpht.com/ytc/AAUvwngQNAVjLe99z3AoBiSRK766IsNfCV_Q4D-ALsL3Aw=s88-c-k-c0x00ffffff-no-rj" alt="" />
                <div>
                    <p>Pink Floyd</p>
                    <span>
                        85M views •
                    </span>
                    <span> 6 years ago</span>
                </div>
            </div>





        </div>
    );
};

export default Video;