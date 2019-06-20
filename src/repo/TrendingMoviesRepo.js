/**
 * Created by brasaeed on 21/06/2019.
 */
import Repository from "./Repository";

const endPoint = 'trending';

export default {
    getTrendingMovies(mediaType = 'all', timeWindow = 'week', refresh = false){
        //todo check for cached data
        return Repository.get(`${endPoint / mediaType / timeWindow}`)
    }
}