import { RotateCcw } from 'react-feather';
import { Hash } from 'react-feather';
import { ChevronUp } from 'react-feather';
import { ChevronDown } from 'react-feather';
import { ChevronsUp } from 'react-feather';
import { ChevronsDown } from 'react-feather';
import React, { useState } from 'react';
import './Counter.css';

function Counter() {

    const [count, setCount] = useState(0);

    const incrementByOne = () => {
        setCount(count + 1);
    };

    const incrementByTen = () => {
        setCount(count + 10);
    };

    const resetCount = () => {
        setCount(0);
    };

    const setRandomCount = () => {
        const randomCount = Math.floor(Math.random() * 100) + 1;
        setCount(randomCount);
    };

    const decrementByTen = () => {
        setCount(count - 10);
    };

    const decrementByOne = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter-body">
        <div className="counter-app">
            <h1 className="app-title">Current value:</h1>
            <p className="count-display"> {count}</p>
            <button className="button" onClick={incrementByOne}>
              <ChevronUp className="icon" />
                </button>
            <button className="button" onClick={incrementByTen}>
            <ChevronsUp className="icon" />
                </button>
            <button className="button" onClick={resetCount}>
            <RotateCcw className="icon" />
                </button>
            <button className="button" onClick={setRandomCount}>
            <Hash className="icon" />
                </button>
            <button className="button" onClick={decrementByTen}>
            <ChevronsDown className="icon" />
                </button>
            <button className="button" onClick={decrementByOne}>
            <ChevronDown className="icon" />
                </button>
        </div>
        </div>
    );
}

export default Counter;