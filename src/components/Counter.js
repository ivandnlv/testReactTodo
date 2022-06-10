import React from 'react';

const Counter = ({ completedTodos, todoList }) => {
  return (
    <>
      {completedTodos.length !== 0 && completedTodos.length < todoList.length ? (
        <div className="col-md-auto">
          <p className="mt-3">{completedTodos.length} выполнено</p>
        </div>
      ) : completedTodos.length === todoList.length ? (
        <div className="col-md-auto">
          <p className="mt-3"> Все дела выполнены, вы молодец!</p>
        </div>
      ) : null}
    </>
  );
};

export default Counter;
