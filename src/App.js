import React from 'react';
import {Header} from 'workfiles/Header.js';
import {ThreadList} from 'workfiles/ThreadList.js'
import {Makethread} from "workfiles/Makethread.js";

function App() {
  return (
    <div>
      <Header />
      <ThreadList />
      <Makethread />
    </div>
  );
}
export default App;
