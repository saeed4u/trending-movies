/**
 * Created by brasaeed on 21/06/2019.
 */
import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/movie/';

const axiosInstance = axios.create({
    baseUrl
});
//store in env
axiosInstance.defaults.params['api_key'] = 'f5cad543ee3f010acc7b30d4d1f7c504';
export default axiosInstance;
