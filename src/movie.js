import { output } from "../webpack.config";
// api data="http://www.omdbapi.com/?i=tt3896198&apikey=41a9886c"
// API Information
class OMDBMovies {
  constructor() {
    this.api_key = "41a9886c";
  }

  async getMovieByTitle(title) {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=${this.api_key}`
      );
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: movie.js ~ line 15 ~ OMDBApiMovies ~ getMovieByTitle ~ error",
        error
      );
    }
  }
}
export const omdb = new OMDBMovies();
