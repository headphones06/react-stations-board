import React, {useRef} from 'react';
import 'workfiles/Makepost/Makepost.css';
import { Link, useNavigate, useParams} from "react-router-dom";

export function Makepost(){
  const navigate = useNavigate();
  const formRef = useRef(null);

  const { id } = useParams();

  //const goHome = () => {navigate(-1);}

  function clicked(){
    const formData = new FormData(formRef.current)
    const options = {
      method: 'POST',
      body: formData,
    }
    fetch("https://railway-react-bulletin-board.herokuapp.com/threads/" + id + "/posts", options)
    .then((response)=> response.json())
    .then((responseJson) =>{
      console.log(responseJson)
      navigate(-1);
    })
  }

  return(
    <div className='make'>
      <h1>新規投稿</h1>
      <p>
        下のフォームに投稿内容を入力してください。<br />
        入力後は自動で一覧に戻ります。
      </p>
      <form className="form" ref={formRef}>
        <p>
          <label>
            内容:<br />
            <input className="txt" type="text" name="post" placeholder="内容"/>
          </label>
        </p>
        <button className='button' type="button" onClick={clicked}>送信</button>
      </form>
      <br />
      <button><Link to={"/thread/" + id } >一覧に戻る</Link></button>
    </div>
  )
}