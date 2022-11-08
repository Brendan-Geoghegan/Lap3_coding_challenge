<<<<<<< HEAD
import React from "react";
import "./main.css";

const App = () => {
	return <div>App</div>;
};
=======
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts'
import { Home, NotFound, User } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
>>>>>>> b5e13b003d8fa66a6523a5412120e35983b56c8d

export default App;
