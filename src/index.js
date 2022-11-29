import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { TodoProvider } from './context/todo.context';
import { SubTaskProvider } from './context/subtask.context';
import { ViewTodoProvider } from './context/viewTodo.context';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <SubTaskProvider>
          <ViewTodoProvider>
            <App />
          </ViewTodoProvider>
        </SubTaskProvider>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
