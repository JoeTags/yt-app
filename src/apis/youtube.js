import axios from 'axios';


const KEY = 'AIzaSyCJT_whTSU0nGzliM6ygCQ9U05RqQMiPLE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
