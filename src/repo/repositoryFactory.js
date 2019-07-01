/**
 * Created by brasaeed on 21/06/2019.
 */
import trendingMovieRepo from "./trendingMoviesRepo";
const repositories = {
    trending: trendingMovieRepo
};

export const repositoryFactory = {
    get: name => repositories[name]
};