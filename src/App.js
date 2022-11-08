import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts'
import { Home, NotFound, User } from './pages'

import "./main.css";

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
