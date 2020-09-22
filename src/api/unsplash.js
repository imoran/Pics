import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID _1y3USA-Y0L2bbZkj2Z-uHcB_K5iPvgVWxMj7R6zcqE' 
    }
});