import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const secondsRender = () => {
  const currentSecond = new Date().getSeconds();
  const secondsElem = (
    <div
      className="seconds"
      style={{
        color: currentSecond % 2 === 0 ? '#fff' : '#000',
        backgroundColor: currentSecond % 2 !== 0 ? '#fff' : '#000',
      }}
    >
      {currentSecond}
    </div>
  );
  ReactDOM.render(secondsElem, rootElement);
};

secondsRender();
setInterval(() => secondsRender(new Date()), 500);
