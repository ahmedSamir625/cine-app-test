export const MovieCard = ({ poster_path }) => {
  const cardDiv = document.createElement("div");



  cardDiv.innerHTML = `   
    <img 
        src="https://image.tmdb.org/t/p/w200/${poster_path}"
        alt="orange tree"
    />  
 `;



  return cardDiv;
};
