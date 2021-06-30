import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID yfX9tWM3QURxIswFV4Sdr2fhC6czETjRm6cIEQGL4X8'
    } 
});