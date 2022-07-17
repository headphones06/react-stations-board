import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Header} from 'workfiles/Header.js';
import {ThreadList} from 'workfiles/ThreadList.js'
import {Makethread} from "workfiles/Makethread.js"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/thread/new" element={<Makethread />} />
      </Routes>
    </Router>
  );
}
export default App;
