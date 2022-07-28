import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Movelist } from 'workfiles/Movelist';
import "workfiles/Postlist/Postlist.css"

export function PostList(props){
  const [postList, setPostList] = useState([]);
  const [count, setCount] = useState(0);
  const [isloading, setisloading] = useState(false);
  const [isend, setisend] = useState(false);

  const loc = useLocation();
  const state = loc.state.const;

  useEffect(() => {
    if(count < 0){
      setCount(0);
    }else{
      setisloading(true)
      fetch("https://railway-react-bulletin-board.herokuapp.com/threads/" + state.id + "/posts?offset=" + count)
      .then(res => res.json())
      .then(data => {
        setPostList(data.posts)
        setisend(data.length != 10)
        console.log(data.posts)
      }).finally(() => setisloading(false))
    }
  }, [count])

  const listUp = postList.map((content) => {
    return(
      <div className="container">
        <p className = "id">{content.id}</p>
        <h2 className = "post">{content.post}</h2>
      </div>
    )
  })

  return(
    <div>
      <h1>投稿内容</h1>
      <button className = "underbtn"><Link to="" >新規投稿</Link></button>
      <Movelist isloading={isloading} isend={isend} count={count} setCount={setCount} />
      <div>
        {listUp}
      </div>
      <Movelist isloading={isloading} isend={isend} count={count} setCount={setCount} />
      <br />
      <button className = "underbtn"><Link to="/" >一覧に戻る</Link></button>
    </div>
  )
}
