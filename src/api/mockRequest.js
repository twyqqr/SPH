import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"

const request = axios.create({
    baseURL:"/mock",
    timeout:5000,
})

request.interceptors.request.use((config)=>{
    nProgress.start();
    return config;
});

request.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},()=>{
    return Promise.reject(new Error('failure'))
});

export default request;