import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";

export function PostList(props){
  const [postList, setPostList] = useState([]);
  const [count, setCount] = useState(0);
  const [isloading, setisloading] = useState(false);
  const [isend, setisend] = useState(false);

  const loc = useLocation();
  const increment = () => setCount((prevValue) => prevValue + 10);
  const decrement = () => setCount((prevValue) => prevValue - 10);

  useEffect(() => {
    if(count < 0){
      setCount(0);
    }else{
      setisloading(true)
      fetch("https://railway-react-bulletin-board.herokuapp.com/threads/" + loc.threadid + "/posts?offset=" + count)
      .then(res => res.json())
      .then(data => {
        setPostList(data)
        setisend(data.length != 10) //条件式を書いてもtrue判断可能
        console.log(data)
      }).finally(() => setisloading(false))
    }
  }, [count])

  const listUp = postList.map((content) => {
    return(
      <div className="container">
        <p className = "id">{content.posts.id}</p>
        <h2 className = "post">{content.posts.post}</h2>
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
      <h1>スレッド内の投稿</h1><br />
      {buttonset()}
      <div>
        {listUp}
      </div>
      {buttonset()}
      <br />
      <button className = "underbtn"><Link to="" >新規投稿</Link></button>
      <br />
      <button className = "underbtn"><Link to="/" >一覧に戻る</Link></button>
    </div>
  )
}
