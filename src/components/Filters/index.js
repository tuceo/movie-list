const Filters = ({filters, setFilters}) => {

    const handleChange = (name, e) => {
        setFilters({
            ...filters,
            [name]: e?.target?.value,
            page: 1,
        })
    }

    return (
        <form className={"w-1/4 mr-16 bg-gray-800 p-10"}>
            <h4 className="text-xl font-bold text-white text-center py-6">Filters</h4>

            <div className="mb-6">
                <label htmlFor="title"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input id="title"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => handleChange("s", e)} defaultValue={filters?.s}/>
            </div>

            <div className="mb-6">
                <label htmlFor="releaseYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release
                    Year</label>
                <input id="releaseYear"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required
                       onChange={(e) => handleChange("y", e)}/>
            </div>

            <div className="mb-6">
                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <select id="type"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Select a type</option>
                    <option>movie</option>
                    <option>series</option>
                    <option>episode</option>
                </select>
            </div>
        </form>
    );
};

export default Filters;
