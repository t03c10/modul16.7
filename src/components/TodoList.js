import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    let tasks = props.dataList.map(element => {
        return <Todo item={element} remove={props.removeTodo} key={element.id} />
    })
    return (
        <ol>{tasks}</ol>
    );
};

export default TodoList;