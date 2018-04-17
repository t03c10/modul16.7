import React from 'react';
import style from './TodoList.css';
import ReactTooltip from 'react-tooltip'

const Todo = ({ item, remove }) => {
    return (
        <li data-tip data-for='tooltip' onClick={() => remove(item.id)}>{item.text}
            <ReactTooltip id='tooltip' type='error' place='right' data-delay-show='1000' offset={{ top: 10, right: 10 }}>
                <span>Click to remove task</span>
            </ReactTooltip></li>
    );
};

export default Todo;