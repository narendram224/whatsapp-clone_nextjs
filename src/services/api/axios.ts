import axios from 'axios';
import { BASE_URL } from 'src/utils/constant';

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});
export default Axios;
