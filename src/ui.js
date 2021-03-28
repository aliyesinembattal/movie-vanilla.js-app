import Toastify from "toastify-js";

class UI {
  constructor() {
    this.movie = document.getElementById("movie");
    this.searchInput = document.getElementById("search");
  }

  // Show all posts
  showMovie(movie) {
    this.movie.innerHTML = `
      <div class="card large center">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${movie.Poster}">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4"><strong>${movie.Title}</strong><i class="material-icons right">more_vert</i></span>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
        <p class="movie-year"><strong>Year: </strong>${movie.Released}</p>
        <p class="movie-genre"><strong>Genre: </strong>${movie.Genre}</p>
        <p class="movie-runtime"><strong>Runtime: </strong>${movie.Runtime}</p>
        <p class="movie-writer"><strong>Writer: </strong>${movie.Writer}</p>
        <p class="movie-actors"><strong>Actors: </strong>${movie.Actors}</p>
        <p class="movie-rating"><strong>Rating: </strong>${movie.imdbRating}</p>
        <p class="movie-production"><strong>Production: </strong>${movie.Production}</p>
      </div>
    </div>`;
  }

  // Show alert message
  showAlert(message) {
    Toastify({
      text: message,
      duration: 3000,
      destination: "https://github.com/aliyesinembattal",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  }

  // Clear movie
  clearMovie() {
    this.movie.style.display = "none";
  }
  // Clear movie
  clearInput() {
    this.searchInput.value = "";
  }
}

export const ui = new UI();
