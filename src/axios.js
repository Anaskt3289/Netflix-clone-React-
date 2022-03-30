import axios from 'axios';
import { baseUrl } from './Contants/Constants';


const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance