import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import style from './TodoItem.module.css';

const TodoItem = ({ children, isTodoCompleted, todoToComplete }) => {
  const [complete, setComplete] = useState(false);

  const onCompleteClick = (e) => {
    setComplete(!complete);
    todoToComplete(e.target.textContent);
  };

  return (
    <li className={'list-group-item' + ' ' + style.todoItem} onClick={(e) => onCompleteClick(e)}>
      {isTodoCompleted && <BsFillCheckCircleFill />}
      {isTodoCompleted ? (
        <span className={'ms-1' + ' ' + style.complete}>{children}</span>
      ) : (
        <span>{children}</span>
      )}
    </li>
  );
};

export default TodoItem;
