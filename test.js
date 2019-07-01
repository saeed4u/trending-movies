jest.mock('./TrendingMovieRepo');

import {trendingMovieRepo} from "./src/repo/trendingMoviesRepo";

describe('api', () => {
    it('should load trending movies', () => {
        return trendingMovieRepo.getTrendingMovies()
            .subscribe({
                next: data => {

                },
                error: err => {

                }
            })
    })
});