import React, { useRef, useState } from "react";
import SearchBox from "./SearchBox";
import Tooltip from "./Tooltip";

const Button = ({text, tooltipMessage, onClick}) => {
    const buttonRef = useRef();
    const [tooltipState, setIsTooltipState] = useState({visible:false, message:'', ref:buttonRef});

    return(
        <span>
            <button ref={buttonRef} 
                    onClick={(a,e) => onClick(a,e)} 
                    onMouseEnter={() => setIsTooltipState({visible: true, message: tooltipMessage, ref:buttonRef})}
                    onMouseLeave={() => setIsTooltipState({visible: false, message: '', ref:buttonRef})} >{text}</button>
            {tooltipState.visible && 
            (
                <Tooltip targetRef={tooltipState.ref}>
                    {tooltipState.message}
                </Tooltip>
            )}
        </span>
    );
}

export default Button;