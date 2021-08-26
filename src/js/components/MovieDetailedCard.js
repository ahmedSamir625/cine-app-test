export const MovieDetailedCard = ({ id, backdrop_path, title }) => {
  const cardDiv = document.createElement("div");

  const getMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6c49562f5c85b63008a56de98a05c8c8&language=en-US`
    )
      .then((response) => response.json())
      .then(({ genres, tagline }) => {
        const taglineElem = document.getElementById(`tagline-${id}`);
        const genresElem = document.getElementById(`genres-${id}`);
        taglineElem.innerText = tagline;

        genresElem.innerText = "";
        for (let i = 0; i < genres.length; i++) {
          const genre = genres[i];
          genresElem.innerText +=
            i === genres.length - 1 ? genre.name : genre.name + "|";
        }
      });
  };


  cardDiv.innerHTML = ` 
  <img 
  src="https://image.tmdb.org/t/p/original/${backdrop_path}"
  alt="${title}"
  class="img-detailed"
    />

    <div class="bottom-left text-start">
        <h6>Now Playing</h6>
        <h1>${title}</h1>
        <h3 id="tagline-${id}"></h3>
        <h5 id = "genres-${id}"></h5>
        <h6><a href="#" ><span><i class="far fa-play-circle"></i></span> Play Trailer</a></h6>
    </div>
            `;

  getMovieDetails();

  return cardDiv;
};
