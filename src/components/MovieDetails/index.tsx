type MovieDetailsProps = {
    movie: {
        Poster: string,
        Title: string,
        Runtime: string,
        Genre: string,
        Director: string,
        Actors: string,
        imdbRating: string,
    };
}

const MovieDetails = ({movie} : MovieDetailsProps) => (
        <div
            className="flex flex-col items-center m-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                 src={movie?.Poster} alt="movie-poster"/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <button type="button"
                        className="w-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.history.back()}
                >
                    Back
                </button>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie?.Title}
                </h5>
                <h2 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                    Runtime: {movie?.Runtime}
                    Genre: {movie?.Genre}
                    Director: {movie?.Director}
                    Actors: {movie?.Actors}
                    IMDB Rating: {movie?.imdbRating}
                </h2>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                    technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    );

export default MovieDetails;
