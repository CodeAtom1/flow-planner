import React, { useRef } from "react";
import SearchBox from "./SearchBox";

const SearchForm = () => {
    const inputRef = useRef();

    return(
        <div>
            <SearchBox ref={inputRef} />
            <button></button>
        </div>
    );
}

export default SearchForm;