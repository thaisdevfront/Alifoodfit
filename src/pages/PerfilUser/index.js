
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
  End: 'USA - Holly',
  Description: 'Alergias: Amendoin',
};



function PerfilUser() {
  return (
    <>
      <div className="Perfil">

        <div className="NotificatiOn">
          <Link className="btn-circl" to="/Notification" >Icon</Link>
        </div>
        <div className="content-text">
          <h1 className="title">Perfil do Usuário</h1>
        </div>
        <div id='Perfil' className="App-Pefil">
          <> 
            <> 
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
            </>
            <div className='fillSub'>
              <h4>{user.name}</h4>
              <p>{user.End}</p>
              <p>{user.Description}</p>

            </div>
          </>
        </div>

          <main>
            <>
                <div className='NavPost'>
                    <div className='PostsSalvos'>
                        <Link to='/Salvos' >Posts Salvos</Link>
                    </div>
                    <div className='PostsSalvos'>
                        <Link to='/Salvos' >Novo Post</Link>
                    </div>
                    <div className='PostsSalvos'>
                        <Link to='/Salvos' >Meus Posts</Link>
                    </div>
                </div>
                <div className='ResultPost'>
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
            </>
          </main>
  
        <Header/>

      </div>
      </>

  );
}

export default PerfilUser;
