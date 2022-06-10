import { useEffect, useState } from 'react';
import Counter from './components/Counter';
import Filters from './components/Filters';
import TodoCreate from './components/TodoCreate';
import TodoItem from './components/TodoItem/TodoItem';

function App() {
  const [todoList, setTodoList] = useState(['Погулять с котом', 'Поесть']);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([...todoList]);
  const [showActive, setShowActive] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todoList'));
    const localCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
    const localActiveTodos = JSON.parse(localStorage.getItem('activeTodos'));

    localTodos && setTodoList(localTodos);
    localCompletedTodos && setCompletedTodos(localCompletedTodos);
    localActiveTodos && setActiveTodos(localActiveTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [completedTodos]);

  useEffect(() => {
    localStorage.setItem('activeTodos', JSON.stringify(activeTodos));
  }, [activeTodos]);

  useEffect(() => {
    completedTodos.forEach((completeItem) => {
      setActiveTodos((prev) => prev.filter((item) => item !== completeItem));
    });
  }, [completedTodos]);

  const todoToComplete = (todo) => {
    if (completedTodos.find((item) => item === todo)) {
      setCompletedTodos((prev) => prev.filter((item) => item !== todo));
      setActiveTodos((prev) => [todo, ...prev]);
    } else setCompletedTodos((prev) => [...prev, todo]);
  };

  const isTodoCompleted = (todo) => {
    return completedTodos.some((item) => item === todo);
  };

  const clearCompleted = () => {
    completedTodos.forEach((completeItem) => {
      setTodoList((prev) => prev.filter((item) => item !== completeItem));
    });
    setCompletedTodos([]);
  };

  const createNewTodo = (todo) => {
    setTodoList((prev) => [...prev, todo]);
    setActiveTodos((prev) => [...prev, todo]);
  };

  return (
    <div className="App">
      <h1 className="text-center text-white mt-5">Тестовое задание: todolist</h1>
      <div className="container bg-light p-5 rounded-3 mt-5">
        <h2>Список дел на сегодня</h2>
        <ul className="list-group mt-3">
          {!showCompleted && !showActive
            ? todoList.map((item, index) => (
                <TodoItem
                  key={index}
                  isTodoCompleted={isTodoCompleted(item)}
                  todoToComplete={todoToComplete}>
                  {item}
                </TodoItem>
              ))
            : showCompleted
            ? completedTodos.map((item, index) => (
                <TodoItem
                  key={index}
                  isTodoCompleted={isTodoCompleted(item)}
                  todoToComplete={todoToComplete}>
                  {item}
                </TodoItem>
              ))
            : activeTodos.map((item, index) => (
                <TodoItem
                  key={index}
                  isTodoCompleted={isTodoCompleted(item)}
                  todoToComplete={todoToComplete}>
                  {item}
                </TodoItem>
              ))}
        </ul>
        <div
          className="d-flex mt-3 align-items-center justify-content-between"
          style={{ width: '100%', textAlign: 'center' }}>
          <Counter todoList={todoList} completedTodos={completedTodos} />

          <div className="col-md-auto">
            <Filters setShowCompleted={setShowCompleted} setShowActive={setShowActive} />
          </div>

          <div className="col-md-auto">
            <button type="button" className="btn btn-danger" onClick={clearCompleted}>
              Очистить выполненные
            </button>
          </div>
        </div>

        <TodoCreate createNewTodo={createNewTodo} />
      </div>
    </div>
  );
}

export default App;
