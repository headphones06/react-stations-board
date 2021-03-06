import React, {useEffect, useState} from 'react';
import 'workfiles/ThreadList.css';
import { Link } from "react-router-dom";

export function ThreadList(){
  const [threadList, setThreadList] = useState([]);
  const [count, setCount] = useState(0);
  const [isloading, setisloading] = useState(false);
  const [isend, setisend] = useState(false);
  const increment = () => setCount((prevValue) => prevValue + 10);
  const decrement = () => setCount((prevValue) => prevValue - 10);

  useEffect(() => {
    if(count < 0){
      setCount(0);
    }else{
      setisloading(true)
      fetch("https://railway-react-bulletin-board.herokuapp.com/threads?offset=" + count)
      .then(res => res.json())
      .then(data => {
        setThreadList(data)
        setisend(data.length != 10) //条件式を書いてもtrue判断可能
        console.log(data)
      }).finally(() => setisloading(false))
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

  function buttonset(){
    return(
      <div className = "btnset">
        <button type="button" onClick={decrement} disabled={isloading || count <= 0}>前の10件</button>
        <button type="button" onClick={increment} disabled={isloading || isend} >次の10件</button>
      </div>
    )
  }

  return(
    <div>
      <h1>スレッド一覧</h1><br />
      <button className = "newbtn"><Link to="/thread/new" >新規スレッド作成</Link></button>
      {buttonset()}
      <div>
        {listUp}
      </div>
      {buttonset()}
    </div>
  )
}

