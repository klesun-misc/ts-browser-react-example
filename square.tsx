import React from './cjstoes6/react.es6.js';

export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value || '\u00a0'}
        </button>
    );
}
