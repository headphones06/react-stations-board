import React, {useRef} from 'react';
import 'workfiles/Makepost/Makepost.css';
import { useNavigate, useParams} from "react-router-dom";

export function Makepost(props){
  var formElement = document.getElementById('form')
  //const navigate = useNavigate();
  const formRef = useRef(null);

  const { id } = useParams();

  //const goHome = () => {navigate(-1);}

  function clicked(){
    const formData = new FormData(formRef.current)
    const options = { method: 'POST', body: formData, }

    formElement.reset();
    fetch("https://railway-react-bulletin-board.herokuapp.com/threads/" + id + "/posts", options)
    .then(function(response) {
      console.log(response.ok);
      props.setCount(-1);
    })
  }

  return(
    <div className='make'>
      <h1>投稿</h1>
      <p>フォームに投稿内容を入力してください。</p>
      <form id="form" className="form" ref={formRef}>
        <p>
          <label>
            内容:<br />
            <input className="txt" type="text" name="post" placeholder="内容"/>
          </label>
        </p>
        <button className='button' type="button" onClick={clicked}>送信</button>
      </form>
    </div>
  )
}