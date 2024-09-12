import React, { useRef } from "react";
import SearchBox from "./SearchBox";

const SearchForm = () => {
    const inputRef = useRef();

    return(
        <div>
            <SearchBox ref={inputRef} />
            <button onClick={() => inputRef.current.focus()} >Focus</button>
            <button onClick={() => inputRef.current.clear()} >Clear</button>
        </div>
    );
}

export default SearchForm;