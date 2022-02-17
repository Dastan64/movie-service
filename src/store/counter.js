import { makeAutoObservable, runInAction } from "mobx"

class Counter {
    movies = [];
    movie = {};
    constructor() {
        makeAutoObservable(this);
    }
    getMovies(query) {
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.REACT_APP_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                runInAction(() => {
                    this.movies = [...data.films];
                });
            });
    }
    getAllMovieInfo(id) {

        const urls = [`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/facts`, `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`];

        Promise.allSettled(urls.map(url => fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': process.env.REACT_APP_API_KEY,
                'Content-Type': 'application/json',
            },
        }))).then(responseArr => {
            return Promise.allSettled(responseArr.map(r => r.value.json()))
        }).then(([facts, videos]) => {
            runInAction(() => this.movie.facts = facts.value.items)
            runInAction(() => this.movie.videos = videos.value.items)
        })
    }
}
export default new Counter();