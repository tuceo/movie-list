import Loading from "../../src/components/Loading";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import MovieDetails from "../../src/components/MovieDetails";

const Detail = () => {
    const router = useRouter();
    const imdbID = router.query.id;

    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState<{
        Poster: string,
        Title: string,
        Runtime: string,
        Genre: string,
        Director: string,
        Actors: string,
        imdbRating: string,
    }>();

    useEffect(() => {
        if (imdbID) {
            axios
                .get(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}&i=${imdbID}`)
                .then((res) => {
                    setMovie(res?.data)
                })
                .catch((err) => console.error(err))
                .finally(() => setIsLoading(false))
        }
    }, [imdbID]);

    return (
        <div className={"p-10"}>
            <h1 className="text-3xl font-bold text-white text-center py-6">
                MOVIE DETAILS
            </h1>

            {isLoading && <Loading/>}
            {!isLoading && movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export default Detail;
