import {useRouter} from "next/router";

const MovieList = ({movies, totalPage, filters, setFilters}) => {
    const router = useRouter();
    const {page} = {...filters};

    const handlePageChange = (targetpage) => {
        setFilters({...filters, page: targetpage})
    };

    return (
        <div className={"w-3/4"}>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">Year</th>
                    <th scope="col" className="px-6 py-3">imdbID</th>
                </tr>
                </thead>

                <tbody>
                {movies?.map(item => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item?.imdbID}>
                        <th scope="row"
                            className="cursor-pointer px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            onClick={() => router.push("/detail/" + item?.imdbID)}>{item?.Title}</th>
                        <td className="px-6 py-4"> {item?.Year}</td>
                        <td className="px-6 py-4">{item?.imdbID}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className={"flex items-center justify-between"}>
                <div className="text-l font-bold text-white py-6">Total Page: {totalPage}</div>

                <nav>
                    <ul className="inline-flex -space-x-px">
                        <li className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={() => handlePageChange(page - 1)}>
                            Previous
                        </li>
                        <li className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {page}
                        </li>
                        <li className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={() => handlePageChange(page + 1)}>
                            Next
                        </li>
                    </ul>
                </nav>
            </div>


        </div>

    );
};

export default MovieList;
