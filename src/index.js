import "./styles/styles.scss";

import {
  Carousel,
  MovieCard,
  MovieDetailedCard,
  NavBar,
} from "./js/components/index.js";

const displayNavBar = () => {
  const nowPlayingContainer = document.getElementById("navbar");
  nowPlayingContainer.appendChild(NavBar());
};

const displayNowPlayingMovies = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6c49562f5c85b63008a56de98a05c8c8&language=en-US&page=1"
  )
    .then((response) => response.json())
    .then((data) =>
      Carousel(
        data.results,
        "#now-playing-carousel",
        {
          freeScroll: true,
          wrapAround: true,
          contain: true,
          pageDots: false,
        },
        MovieDetailedCard
      )
    );
};

const displayTopRatedMovies = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=6c49562f5c85b63008a56de98a05c8c8&language=en-US&page=1"
  )
    .then((response) => response.json())
    .then((data) =>
      Carousel(
        data.results,
        "#top-rated-carousel",
        {
          freeScroll: true,
          contain: true,
          pageDots: false,
        },
        MovieCard
      )
    );
};

const displayTrendingMovies = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=6c49562f5c85b63008a56de98a05c8c8&language=en-US&page=1"
  )
    .then((response) => response.json())
    .then((data) =>
      Carousel(
        data.results,
        "#trending-carousel",
        {
          freeScroll: true,
          contain: true,
          pageDots: false,
        },
        MovieCard
      )
    );
};

const displayContent = () => {
  displayNavBar();
  displayNowPlayingMovies();
  displayTopRatedMovies();
  displayTrendingMovies();
};

displayContent();
