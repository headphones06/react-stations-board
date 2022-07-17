import React, {useState, useEffect} from 'react';
import 'workfiles/Makethread.css';
import { Link, useNavigate } from "react-router-dom";

export function Makethread(){
  const navigate = useNavigate();

  const goHome = () => {navigate("/");}

  function clicked(){
    const formData = new FormData(document.getElementById("form"))
    const options = {
      method: 'POST',
      body: formData,
    }
    fetch("https://railway-react-bulletin-board.herokuapp.com/threads", options)
    .then((response)=> response.json())
    .then((responseJson) =>{
      console.log(responseJson)
      goHome();
    })
  }

  return(
    <div className='make'>
      <h1>新規スレッド作成</h1>
      <p>
        下のフォームにスレッドタイトルを入力してください。<br />
        入力後は自動で一覧に戻ります。
      </p>
      <form id="form">
        <p>
          <label>
            タイトル:<br />
            <input type="text" name="title" placeholder="スレッドのタイトル"/>
          </label>
        </p>
        <button id='button' type="button" onClick={clicked}>送信</button>
      </form>
      <br />
      <button><Link to="/" >一覧に戻る</Link></button>
    </div>
  )
}