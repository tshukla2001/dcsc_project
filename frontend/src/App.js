import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Feed from './components/Feed';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import store from './redux/store';
import Selection from './components/Selection';



const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/selection" element={<Selection />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

