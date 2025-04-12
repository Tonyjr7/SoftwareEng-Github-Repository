import React from "react";
import './Card.css';
import { useState } from 'react';

const Card = () => {
    const  [value, setValue] = useState(0);
    const MIN_THRESHOLD = 0;
    const MAX_THRESHOLD = 10;

    const handleAdd = () => {
        if (value < MAX_THRESHOLD) {
            setValue(value+1);
        }
        else {
            alert("Reached limit");
        }
    }
    const handleMinus = () => {
        if (value > MIN_THRESHOLD) {
            setValue(value-1);
        }
    }

    return (
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-value">{value}</div>
            <button className="but" onClick={() => {handleAdd()}}>Add</button>
            <button className="but" onClick={() => {handleMinus()}}>Minus</button>
          </div>
        </div>
    );
}  

export default Card;