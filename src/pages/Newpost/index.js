import React from 'react';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import './Newpost.css';

function Newpost() {

  return (
    <>
    <div className='Newpost-camera'>
      <div className='ControlsFull'>
          <div className='Flax'>
            <Link className="btn-circl-Newpost" to="/" >Exit</Link>
          </div>
          <div className='Close'>
            <Link className="btn-circl-Newpost" to="/" >X</Link>
          </div>
      </div>
      <div className="Newpost">
        <div id='Newpost' className="App-Newpost">
          <h1>NewPost</h1>
        </div>

        <footer className='Controls'>
          <div className='Flax'>
            <Link className="btn-circl-Newpost" to="/" >o</Link>
          </div>
        </footer>
      </div>
    </div>
    <Header/>
    </>
  );
}

export default Newpost;
