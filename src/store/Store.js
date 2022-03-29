import { makeAutoObservable, runInAction } from "mobx"

class Store {
    constructor() {
        this.movies = [];
        this.top250movies = {
            movies: [],
            pagesCount: null,
        };
        this.top100PopularMovies = {
            hasLoaded: false,
            movies: [],
            pagesCount: null,
        };
        this.topAwaitedMovies = {
            hasLoaded: false,
            movies: [],
            pagesCount: null,
        };
        this.top250movies = {
            hasLoaded: false,
            movies: [],
            pagesCount: null,
        };
        this.movie = {
            info: {},
            facts: [],
            similars: [],
            sequels: [],
            boxOffice: [],
            staff: [],
            reviews: [],
            hasLoaded: false,
        };
        this.person = {};
        makeAutoObservable(this);
    }
    addMovies(data) {
        this.movies = [...data];
    }

    addTopMovies(moviesObj, data) {
        moviesObj.movies = [...data.films];
        moviesObj.pagesCount = data.pagesCount;
        moviesObj.hasLoaded = true;
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
                this.addMovies(data.films)
            });
    }

    getAllMovieInfo(id) {
        const urls = [`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/facts`, `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/sequels_and_prequels`, `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`, `https://kinopoiskapiunofficial.tech/api/v1/reviews?filmId=${id}&page=1`
        ];

        Promise.allSettled(urls.map(url => fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': process.env.REACT_APP_API_KEY,
                'Content-Type': 'application/json',
            },
        }))).then(responseArr => {
            return Promise.allSettled(responseArr.map(r => r.value.json()))
        }).then(([info, facts, similars, sequels, boxOffice, reviews]) => {
            runInAction(() => this.movie.info = info.value)
            runInAction(() => this.movie.facts = facts.value.items)
            runInAction(() => this.movie.similars = similars.value.items)
            runInAction(() => this.movie.sequels = sequels.value)
            runInAction(() => this.movie.boxOffice = boxOffice.value.items)
            // runInAction(() => this.movie.staff = staff.value)
            runInAction(() => this.movie.reviews = reviews.value)
            runInAction(() => this.movie.hasLoaded = true)
        })
            .catch(err => console.error(`Ошибка в следующем: ${err}`))
    }

    getReviews(id, page) {
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v1/reviews?filmId=${id}&page=${page}`,
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
                runInAction(() => this.movie.reviews = data)
            });

    }

    getTop250Movies(page) {
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
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
                this.addTopMovies(this.top250movies, data);
            });
    }

    getTop100PopularMovies(page) {
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`,
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
                this.addTopMovies(this.top100PopularMovies, data);
            });
    }

    getTopAwaitedMovies(page) {
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${page}`,
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
                this.addTopMovies(this.topAwaitedMovies, data);
            });
    }

    getPerson(id) {
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v1/staff/${id}`,
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
                this.addPerson(data);
            });
    }

    addPerson(data) {
        this.person = { ...data }
    }
}

export default new Store();