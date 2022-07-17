import React, {useEffect, useState} from 'react';
import {Header} from 'workfiles/Header.js';
import 'workfiles/Makethread.css';

export function Makethread(){

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
      window.location.reload()
    })
  }

  return(
    <div className='make'>
      <form id="form">
        <p>
          <label>
            タイトル:<br />
            <input type="text" name="title" placeholder="スレッドのタイトル" required/>
          </label>
        </p>
        <button id='button' type="button" onClick={clicked}>送信</button>
      </form>
    </div>
  )
}