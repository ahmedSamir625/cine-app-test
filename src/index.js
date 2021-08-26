import "./styles/styles.scss";
import "regenerator-runtime/runtime.js";
import localForage from "localforage";
import registerSW from "./serviceWorkerRegisteration";
import { injectedMovies } from "./js/injectedMovies.js";

import {
  Carousel,
  MovieCard,
  MovieDetailedCard,
  NavBar,
} from "./js/components/index.js";

const urls = {
  "now-playing":
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6c49562f5c85b63008a56de98a05c8c8&language=en-US&page=1",
  "top-rated":
    "https://api.themoviedb.org/3/movie/top_rated?api_key=6c49562f5c85b63008a56de98a05c8c8&language=en-US&page=1",
  popular:
    "https://api.themoviedb.org/3/movie/popular?api_key=6c49562f5c85b63008a56de98a05c8c8&language=en-US&page=1",
};

const getAllMovies = async () => {
  try {
    return Promise.all([
      (await fetch(urls["now-playing"])).json(),
      (await fetch(urls["top-rated"])).json(),
      (await fetch(urls["popular"])).json(),
    ]).then((res) => {
      let obj = {};
      {
        obj["now-playing"] = res[0].results;
        obj["top-rated"] = res[1].results;
        obj["trending"] = res[2].results;
      }
      localForage.setItem("allMovies", obj);
      return obj;
    });
  } catch (error) {
    console.log("couldn't get movies..", error);
  }
};

const displayNavBar = () => {
  const nowPlayingContainer = document.getElementById("navbar");
  nowPlayingContainer.appendChild(NavBar());
};

const displayMovies = () => {
  const displayMoviesLists = (data, type = "") => {
    if (type) {
      document.querySelector("#top-rated-carousel").classList.add("hide");
      document.querySelector("#now-playing-carousel").classList.add("hide");
      document.querySelector("#trending-carousel").classList.add("hide");
    }

    Carousel(
      data["now-playing"],
      "#now-playing-carousel" + (type && "-" + type),
      {
        freeScroll: true,
        wrapAround: true,
        contain: true,
        pageDots: false,
      },
      MovieDetailedCard
    );

    Carousel(
      data["top-rated"],
      "#top-rated-carousel" + (type && "-" + type),
      {
        freeScroll: true,
        contain: true,
        pageDots: false,
      },
      MovieCard
    );

    Carousel(
      data["trending"],
      "#trending-carousel" + (type && "-" + type),
      {
        freeScroll: true,
        contain: true,
        pageDots: false,
      },
      MovieCard
    );
  };

  localForage
    .getItem("allMovies")
    .then((movies) => {
      displayMoviesLists(movies);
    })
    .catch(displayMoviesLists(injectedMovies));

  getAllMovies()
    .then((allMovies) => {
      displayMoviesLists(allMovies, "api");
    })
    .catch((err) => console.log(err));
};

const displayContent = () => {
  displayNavBar();
  displayMovies();
};

registerSW();
displayContent();
