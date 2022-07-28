import React, {useEffect, useState} from 'react';
import 'workfiles/ThreadList/ThreadList.css';
import { Link } from "react-router-dom";
import { Movelist } from 'workfiles/Movelist';

export function ThreadList(){
  const [threadList, setThreadList] = useState([]);
  const [count, setCount] = useState(0);
  const [isloading, setisloading] = useState(false);
  const [isend, setisend] = useState(false);

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
        <h2 className = "title"><Link to="/post" state={{ const: thre }}>{thre.title}</Link></h2>
        <p className = "id">{thre.id}</p>
      </div>
    )
  })

  return(
    <div>
      <h1>スレッド一覧</h1>
      <button className = "newbtn"><Link to="/thread/new" >新規スレッド作成</Link></button>
      <Movelist isloading={isloading} isend={isend} count={count} setCount={setCount} />
      <div>
        {listUp}
      </div>
      <Movelist isloading={isloading} isend={isend} count={count} setCount={setCount} />
    </div>
  )
}

