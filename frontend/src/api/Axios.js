import axios from 'axios';
// const BASE_URL = ;
const BASE_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_APIDEV_URL : process.env.REACT_APP_APIPROD_URL;

export default axios.create({
    baseURL: BASE_URL
});
