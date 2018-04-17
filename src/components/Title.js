import React from 'react';
const Title = props =>
    <div>
        <h1>{props.title}</h1>
        <h2>Number of pending tasks: {props.length}</h2>
    </div>;
export default Title;
