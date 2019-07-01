import {Observable} from "rxjs";


const fs = require('fs');

const trendingMovieRepo = () => new Observable(subscriber => {
    fs.readFile('./__mockData__/trendingMovies.json', 'utf-8', (err, data) => {
        if (err) {
            subscriber.error(err);
            return;
        }
        subscriber.next(JSON.parse(data));
        subscriber.complete()
    })
});

export default trendingMovieRepo;