import React, { forwardRef, useImperativeHandle, useRef } from "react";

const SearchBox = forwardRef((props, ref) =>{

    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.clear();
        }
    }));

    return (
        <input ref={inputRef} ></input>
    );
});

export default SearchBox;