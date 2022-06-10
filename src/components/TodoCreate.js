import React, { useState } from 'react';

const TodoCreate = ({ createNewTodo }) => {
  const [todoText, setTodoText] = useState(['']);

  const onInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const onClickCreate = (e) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      createNewTodo(todoText);
    } else alert('Вы ничего не ввели');
    setTodoText('');
  };

  return (
    <form action="#" className="d-flex mt-3 align-items-end justify-content-between row">
      <div className="col">
        <label htmlFor="todo" className="fs-3 fw-semibold">
          Новое дело
        </label>
        <br />
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Введите название дела"
          className="rounded-3 p-2 ms-1 mt-2 fs-5"
          style={{ outline: 'none', border: '1px solid #000', width: '400px' }}
          value={todoText}
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <button
        type="button"
        className="btn btn-success col-md-auto"
        style={{ width: '200px', height: '60px' }}
        onClick={(e) => onClickCreate(e)}>
        Создать
      </button>
    </form>
  );
};

export default TodoCreate;
