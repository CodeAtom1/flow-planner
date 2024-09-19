import React, { useRef } from "react";
import SearchBox from "./SearchBox";
import Button from "./Button";

const SearchForm = () => {
    const inputRef = useRef();

    return(
        <div>
            <SearchBox ref={inputRef} />
            <Button text='Focus' tooltipMessage='Focus on Search!' onClick={() => inputRef.current.focus()} />
            <Button text='Clear' tooltipMessage='Clear Search!' onClick={() => inputRef.current.clear()} />
        </div>
    );
}

export default SearchForm;