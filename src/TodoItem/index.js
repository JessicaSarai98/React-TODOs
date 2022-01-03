import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props) {

    const onComplete = () => {
      alert('ya completaste el todo' + props.text);
  };

  const onDelete = () => {
      alert('borraste el todo' + props.text);
  };
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed ={props.completed}
        onComplete = {props.onComplete}
        />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };