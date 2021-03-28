import { omdb } from "./movie";
import { ui } from "./ui";

const searchMovie = document.querySelector("#search");
document.addEventListener("DOMContentLoaded", getMovie("harry"));

// Search input event listener
searchMovie.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.value !== "") {
    getMovie(e.target.value);
    e.preventDefault();
  }
});

function getMovie(movieText) {
  // Make movie Api call
  omdb.getMovieByTitle(movieText).then((data) => {
    if (data.Response === "False") {
      // Show alert
      ui.showAlert(data.Error);
      ui.clearMovie();
      ui.clearInput();
    } else {
      // Show profile
      ui.showMovie(data);
      ui.clearInput();
    }
  });
}
