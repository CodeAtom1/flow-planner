import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

function Tooltip ({children, targetRef}) {
    const [position, setPosition] = useState({top: 0, left: 0});

    useEffect(() => {
        if(targetRef.current){
            const {top, left, width} = targetRef.current.getBoundingClientRect();
            setPosition({
                top: top - 30,
                left: left + width / 2,
            });
        }
    },[targetRef]);

    return ReactDOM.createPortal(
        <div
        style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translateX(-50%)',
            padding: '8px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '12px'
        }}>
            {children}
        </div>,
        document.getElementById('tooltip-root')
    );    
}

export default Tooltip;