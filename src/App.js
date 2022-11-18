import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import HomePage from './routes/homepage/homepage.component';
import GroupBy from './routes/groupby/groupby.component';

import './App.scss';
import { useState } from 'react';
import { getTodolistDocuments } from './utils/firebase.utils';

const App = () => {

  useState(() => {
    getTodolistDocuments();
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='/groupByPriority' element={<GroupBy />} />
      </Route>
    </Routes>
  );
}

export default App;
