import React, { useContext, useEffect, useState } from 'react';
import './_categoriesbar.scss';
import { userContext } from '../../App';

const categoryCollection = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Barcelona',
    'Argentina',
    'Brazil',
    'Shwetabh',
    'Brazil',
    'Shwetabh',
    'Brazil',
    'Shwetabh',
    
]
const Categoriesbar = () => {
    const {value2} = useContext(userContext);
   const [videos, setVideos]= value2;
    const [categoryVideos, setCategoryVideos] = useState([]);
    const [activeElement, setActiveElement] = useState('All');
    useEffect(()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${activeElement}&key=AIzaSyALTUTy8yzda57TLdtPGoKFOgbDyjiuDTA`
        fetch(url)
        .then(res=>res.json())
        .then(data =>setVideos(data.items))
    },[activeElement, setVideos])
    const handleClick = category => {
        setActiveElement(category);
    }
    console.log(activeElement)
    // curl \
//   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&regionCode=US&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed

    return (
        <div className="categoriesBar">
            {
                categoryCollection.map((category, i) => <span
                onClick={() => handleClick(category)}
                className={activeElement === category ? 'active' :''}
                key={i}>
                    {category}
                </span>)
            }
        </div>
    );
};

export default Categoriesbar;