import React from 'react';
import Header from '../Header';
import { Link, } from "react-router-dom";
import "../../App.css";
import "./Notification.css";
// import '../modal/modal';


function Notification() {

  return (
    <div className="Notification">
        <div className="NotificatiOn">
            <Link className="btn-circl" to="/" >Exit</Link>
          </div>
        <div className="content-text">
          <h1 className="title">Notification.</h1>
          </div>
        <div id='Notification' className="App-Notification">
          <div className="Notification">
              <div className="container">
                  <div className="NotificationCheck-list">
                      <div className="NotificaonCheck">
                        <span className="btn" >Café da manhã</span>
                        <span className="btn" >2° Refeição</span>
                        <span className="btn" >Almoço</span>
                        <span className="btn" >4° Refeição</span>
                        <span className="btn" >Janta</span>
                        <span className="btn" >6° Refeição</span>
                        
                        
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <Header/>
    
    </div>
  );
}

export default Notification;
