import { API_KEY } from './../../constants/Api';
import axios from "axios"




export default axios.create({
    baseURL:" https://api.pexels.com",
    params:{
        key:API_KEY
    }
})