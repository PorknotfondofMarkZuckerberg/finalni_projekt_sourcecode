const API_KEY = "858d05af";

const moviesContainer = document.getElementById("moviesContainer");
const watchlistContainer = document.getElementById("watchlistContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

function refreshSearchUI() {
    const currentSearch = searchInput.value;

    if (currentSearch.trim()) {
        searchMovies();
    }
}

async function searchMovies() {
    const query = searchInput.value;

    if (!query) return;

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );

    const data = await response.json();

    displayMovies(data.Search || []);
}

function displayMovies(movies) {

    moviesContainer.innerHTML = "";

    movies.forEach(movie => {

        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const isInWatchlist = watchlist.find(
            m => m.imdbID === movie.imdbID
        );

        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>

            <button class="add-btn"
                ${isInWatchlist ? "disabled" : ""}>
                
                ${isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
            </button>
        `;

        const button = movieCard.querySelector(".add-btn");

        if (!isInWatchlist) {

            button.addEventListener("click", () => {

                addToWatchlist(movie);

                displayMovies(movies);
            });
        }

        moviesContainer.appendChild(movieCard);
    });
}



function addToWatchlist(movie) {

    const exists = watchlist.find(m => m.imdbID === movie.imdbID);

    if (exists) return;

    watchlist.push(movie);

    localStorage.setItem("watchlist", JSON.stringify(watchlist));

    renderWatchlist();
}

function renderWatchlist() {

    watchlistContainer.innerHTML = "";

    watchlist.forEach(movie => {

        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <button onclick='removeMovie("${movie.imdbID}")'>
                Remove
            </button>
        `;

        watchlistContainer.appendChild(movieCard);
    });
}

function removeMovie(id) {

    watchlist = watchlist.filter(movie => movie.imdbID !== id);

    localStorage.setItem("watchlist", JSON.stringify(watchlist));

    renderWatchlist();

    refreshSearchUI();
}

searchBtn.addEventListener("click", searchMovies);

renderWatchlist();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service.js");
}

searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        searchMovies();
    }
});
