import React, {useEffect, useState} from 'react';
import 'workfiles/ThreadList.css';

export function ThreadList(){
  const [selectThread, setSelectThread] = useState("");
  const [threadList, setThreadList] = useState([]);
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevValue) => prevValue + 10);
  const decrement = () => setCount((prevValue) => prevValue - 10);

  useEffect(() => {
    if(count < 0){
      setCount(0);
    }else{
      fetch("https://railway-react-bulletin-board.herokuapp.com/threads?offset=" + count)
      .then(res => res.json())
      .then(data => {
        setThreadList(data)
        console.log(data)
      })
    }
  }, [count])

  const listUp = threadList.map((thre) => {
    return(
      <div className="container">
        <h2 className = "title">{thre.title}</h2>
        <p className = "id">{thre.id}</p>
      </div>
    )
  })

  return(
    <div>
      <h1>スレッド一覧</h1><br />
      <div>
        <button type="button" onClick={decrement}>前の10件</button>
        <button type="button" onClick={increment}>次の10件</button>
      </div>
      <div>
        {listUp}
      </div>
      <div>
        <button type="button" onClick={decrement}>前の10件</button>
        <button type="button" onClick={increment}>次の10件</button>
      </div>
    </div>
  )
}

