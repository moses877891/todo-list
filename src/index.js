import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ShowModalProvider } from './context/showmodal.context';
import { TodoProvider } from './context/todo.context';
import { ShowUpdatedModalProvider } from './context/showUpdatedmodal.context';
import { ListToUpdateProvider } from './context/listToUpdate.context';
import { SubTaskModalProvuder } from './context/subTaskmodal.context';
import { SubTaskProvider } from './context/subtask.context';

import App from './App';

import reportWebVitals from './reportWebVitals';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <SubTaskProvider>
          <ShowModalProvider>
            <ShowUpdatedModalProvider>
              <ListToUpdateProvider>
                <SubTaskModalProvuder>
                  <App />
                </SubTaskModalProvuder>
              </ListToUpdateProvider>
            </ShowUpdatedModalProvider>
          </ShowModalProvider>
        </SubTaskProvider>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
