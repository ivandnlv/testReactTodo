import React from 'react';

const Filters = ({ setShowCompleted, setShowActive }) => {
  const onClickCompleted = () => {
    setShowActive(false);
    setShowCompleted(true);
  };

  const onClickAll = () => {
    setShowCompleted(false);
    setShowActive(false);
  };

  const onClickActive = () => {
    setShowCompleted(false);
    setShowActive(true);
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
        onChange={onClickAll}
        defaultChecked
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio1">
        Все
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
        onChange={onClickActive}
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio2">
        Активные
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio3"
        autoComplete="off"
        onChange={onClickCompleted}
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio3">
        Выполненные
      </label>
    </div>
  );
};

export default Filters;
