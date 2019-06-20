/**
 * Created by brasaeed on 21/06/2019.
 */
import TrendingMoviesRepo from "./TrendingMoviesRepo";
const repositories = {
    trending: TrendingMoviesRepo
};

export const RepositoryFactory = {
    get: name => repositories[name]
}