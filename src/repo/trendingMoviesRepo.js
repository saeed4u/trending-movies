/**
 * Created by brasaeed on 21/06/2019.
 */
import Repository from "./repository";
import {from, of} from "rxjs";
import {mergeMap} from "rxjs/operators";
import AppStorage from "./appStorage";
const endPoint = 'trending';

const cacheKey = 'trending_movies_';

export default {
    getTrendingMovies: (mediaType = 'all', timeWindow = 'week', page = 1, refresh = false) => {
        const cachedTrendingMovies = AppStorage.getData(`${cacheKey + page}`);
        if (refresh || !cachedTrendingMovies) {
            //we are going to fetch fresh data from API and then cache
            return from(Repository.get(`${endPoint}/${mediaType}/${timeWindow}`, {
                params: {
                    page: page,
                    api_key: 'f5cad543ee3f010acc7b30d4d1f7c504'
                }
            }))
                .pipe(mergeMap(({data}) => {
                    console.log(data);
                    const trendingMovies = data.results;
                    AppStorage.saveData(`${cacheKey + page}`, trendingMovies);
                    return of(trendingMovies);
                }));
        }
        return of(cachedTrendingMovies);
    }
}