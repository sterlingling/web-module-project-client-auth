import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import AddFriends from './components/AddFriends';
import FriendList from './components/FriendList';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const isAuth = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">FriendList</Link>
          </li>
          <li>
            <Link to="/friends/add">AddFriends</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/friends' element={<FriendList />} />
            <Route path='/friends/add' element={<AddFriends />} />
          </Route>
          <Route path='/logout' element={<Logout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
