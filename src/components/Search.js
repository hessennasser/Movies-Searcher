import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Search = ({ setResults }) => {
    const [searchWord, setSearchWord] = useState("");
    const apiUrl = `https://www.omdbapi.com/?apikey=430a1ecb&S=${searchWord}`;

    const fetchData = async () => {
        const res = await axios.get(apiUrl);
        const result = await res.data.Search;
        setResults(result);
        console.log(result);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (!e.target[0].value) return;
        setSearchWord(e.target[0].value);
        fetchData();
    }

    return (
        <div className='search-wrapper'>
            <form onSubmit={handelSubmit}>
                <input type='text' placeholder='Enter Your Search Word!' value={searchWord} onChange={e => setSearchWord(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search
