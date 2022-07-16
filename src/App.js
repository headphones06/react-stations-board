import React from 'react';
import {Header} from 'workfiles/Header.js';
import {ThreadList} from 'workfiles/ThreadList.js'
import {Makethread} from "workfiles/Makethread";

function App() {
  return (
    <div>
      <Header />
      <ThreadList />
    </div>
  );
}

export default App;
