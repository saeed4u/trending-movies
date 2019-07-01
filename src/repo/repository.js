/**
 * Created by brasaeed on 21/06/2019.
 */
import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/';

const axiosInstance = axios.create({
    baseURL: baseUrl
});
//store in env
axiosInstance.defaults.params = {};
axiosInstance.defaults.params['api_key'] = 'f5cad543ee3f010acc7b30d4d1f7c504';

export default axiosInstance;
