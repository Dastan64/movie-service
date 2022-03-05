import { makeAutoObservable, runInAction } from "mobx"

class Store {
    constructor() {
        this.movies = [];
        this.movie = {
            info: {},
            facts: [],
            similars: [],
            sequels: [],
            boxOffice: [],
        };
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
        const urls = [`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/`, `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/facts`, `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/sequels_and_prequels`, `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`];

        Promise.allSettled(urls.map(url => fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': process.env.REACT_APP_API_KEY,
                'Content-Type': 'application/json',
            },
        }))).then(responseArr => {
            return Promise.allSettled(responseArr.map(r => r.value.json()))
        }).then(([info, facts, similars, sequels, boxOffice]) => {
            runInAction(() => this.movie.info = info.value)
            runInAction(() => this.movie.facts = facts.value.items)
            runInAction(() => this.movie.similars = similars.value.items)
            runInAction(() => this.movie.sequels = sequels.value)
            runInAction(() => this.movie.boxOffice = boxOffice.value.items)
        })
    }

}
export default new Store();