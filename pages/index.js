import Header from "../src/components/Header";
import {useEffect, useState} from "react";
import Filters from "../src/components/Filters";
import MovieList from "../src/components/MovieList";
import axios from "axios";
import Loading from "../src/components/Loading";

export default function Home() {
   const [movies, setMovies] = useState(null);
    const [totalPage, setTotalPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({
        s: "Pokemon",   //title
        y: null,        //year of release
        type: null,     // movie, series, episode
        page: 1,
    });

     useEffect(() => {
        const {s, y, type, page} = {...filters};
        setMovies(null);
        setIsLoading(true);

        axios.get(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL} + ${(s ? "&s=" + s : "") + (y ? "&y=" + y : "") + (type ? "&type=" + type : "") + (page ? "&page=" + page : "")}`)
            .then((res) => {
                setTotalPage(Math.ceil(res?.data?.totalResults / 10));
                setMovies(res?.data?.Search)
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false))
    }, [filters]);

  return (
    <div className={"p-10"}>
        <h1 className="text-3xl font-bold text-white text-center py-6">
            MOVIE DATABASE
        </h1>

        <div className="flex">
            <Filters filters={filters} setFilters={setFilters}/>
            {isLoading && <Loading />}

            {!isLoading && (movies?.length > 0 ? <MovieList movies={movies} totalPage={totalPage} filters={filters}
                                                            setFilters={setFilters}/> : "no data")}
        </div>
    </div>
  )
}
