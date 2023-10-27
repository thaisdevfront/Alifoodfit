
import React from 'react';
import Header from "../../components/Header";
import "../../components/Header/header.css";
import {Link} from "react-router-dom";
import "../../App.css";
import "./perfil.css";


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 100,
};

function PerfilUser() {
  return (
      <div className="Perfil">
        <div className="NotificatiOn">
          <Link className="btn-circl" to="/Notification" >Icon</Link>
        </div>
        {/* <div className="content-text">
              <h1 className="title">Perfil</h1>
          </div> */}
        <div id='Perfil' className="App-Pefil">
            
            <img
              className="avatar"
              src={user.imageUrl}
              alt={'Photo of ' + user.name}
              style={{
                width: user.imageSize,
                height: user.imageSize,
                borderRadius: 100,
              }}
            />
            <h4>{user.name}</h4>
        </div>
  
        <Header/>

      </div>
  );
}

export default PerfilUser;
