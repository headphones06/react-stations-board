import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Header} from 'workfiles/Header.js';
import {ThreadList} from 'workfiles/ThreadList/ThreadList.js'
import {Makethread} from "workfiles/Makethread/Makethread.js"
import { PostList } from 'workfiles/Postlist/PostList.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/thread/new" element={<Makethread />} />
        <Route path="/thread/:id" element={<PostList />} />
      </Routes>
    </Router>
  );
}

//<Route path="/post/new" element={<Makepost />} />
export default App;
