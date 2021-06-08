import axios from 'axios';


const request = axios.create({
    baseUrl:'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:process.env.YOUTUBE_API_KEY,
    }
})

export default request;

// curl \
//   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
