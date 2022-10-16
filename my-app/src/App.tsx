import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Application } from './utils/enums';
import { Login } from './components/Auth/Login';
import { Profile } from './components/Profile';
import './styles/app.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path={Application.Login} element={<Login />} />
          <Route path={Application.Profile} element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
