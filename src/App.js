import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import HomePage from './routes/homepage/homepage.component';
import GroupBy from './routes/groupby/groupby.component';

import './App.scss';

const App = () => {
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
