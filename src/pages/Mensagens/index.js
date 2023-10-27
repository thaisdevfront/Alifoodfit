import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Mensagens() {



  return (
    <div className="Mensagens">
      <div className="NotificatiOn">
            <Link className="btn-circl" to="/Notification" >Icon</Link>
          </div>

          <div className="content-text">
              <h1 className="title">Mensagens</h1>
          </div>
      <div id='Mensagens' className="App-Mensagens">

      </div>
      <Header/>
      
    </div>
  );
}

export default Mensagens;
