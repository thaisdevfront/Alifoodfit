import React from "react";
import Header from "../../components/Header";
import "../../components/Header/header.css";
import  "../../img/ImgPost.png";
import "../../App.css";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home">
      <div id="home" className="App-home">
        <div className="NotificatiOn">
          <Link className="btn-circl" to="/Notification" >Icon</Link>
        </div>

        <div className="content-text">
            <h1 className="title">FIT.</h1>
            <p>Browse all</p>
           
         </div>
         <div className="feed">
            <div className="container">
                <div className="PostUser">
                    <div className="Post">
                      <header>
                        <span className="btn">Café da manhã</span>
                        </header>
                      
                      <footer>
                          <h4>Yogurt com Banana e aveia.</h4>
                          <div className="interation">
                            <div><h6>coração</h6></div>
                            <div><h6>salvar</h6></div>
                          </div>
                      </footer>
                    </div>
                </div>

                <div className="PostUser">
                    <div className="Post">
                      <header>
                        <span className="btn">Café da manhã</span>
                        </header>
                      
                      <footer>
                          <h4>Yogurt com Banana e aveia.</h4>
                          <div className="interation">
                            <div><h6>coração</h6></div>
                            <div><h6>salvar</h6></div>
                          </div>
                      </footer>
                    </div>
                </div>

                <div className="PostUser">
                    <div className="Post">
                      <header>
                        <span className="btn">Café da manhã</span>
                        </header>
                      
                      <footer>
                          <h4>Yogurt com Banana e aveia.</h4>
                          <div className="interation">
                            <div><h6>coração</h6></div>
                            <div><h6>salvar</h6></div>
                          </div>
                      </footer>
                    </div>
                </div>

                <div className="PostUser">
                    <div className="Post">
                      <header>
                        <span className="btn">Café da manhã</span>
                        </header>
                      
                      <footer>
                          <h4>Yogurt com Banana e aveia.</h4>
                          <div className="interation">
                            <div><h6>coração</h6></div>
                            <div><h6>salvar</h6></div>
                          </div>
                      </footer>
                    </div>
                </div>

                <div className="PostUser">
                    <div className="Post">
                      <header>
                        <span className="btn">Café da manhã</span>
                        </header>
                      
                      <footer>
                          <h4>Yogurt com Banana e aveia.</h4>
                          <div className="interation">
                            <div><h6>coração</h6></div>
                            <div><h6>salvar</h6></div>
                          </div>
                      </footer>
                    </div>
                </div>

                <div className="PostUser">
                    <div className="Post">
                      <header>
                        <span className="btn">Café da manhã</span>
                        </header>
                      
                      <footer>
                          <h4>Yogurt com Banana e aveia.</h4>
                          <div className="interation">
                            <div><h6>coração</h6></div>
                            <div><h6>salvar</h6></div>
                          </div>
                      </footer>
                    </div>
                </div>
            </div>

         </div>
      </div>


      <Header/>
    </div>
  );
}

export default Home;
