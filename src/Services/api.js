import axios from 'axios';

const api = axios.create({
    baseURL:'https://zuzu-back.herokuapp.com/'
   
});

export default api;