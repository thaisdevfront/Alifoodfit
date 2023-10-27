import React from 'react';
import Header from '../Header';
import { Link } from "react-router-dom";
import "../../App.css";




function Notification() {



  return (
    <>
    <div className="Notification">
      <div id='Notification' className="App-Notification">
        <div className="NotificatiOn">
          <Link className="btn-circl" to="/" >Exit</Link>
        </div>

        <div className="content-text">
            <h1 className="title">Notification.</h1>
            <p> all</p>
           
         </div>
      </div>
      <Header/>
      
    </div>
    </>
  );
}

export default Notification;
