import React from "react";
import {  Link } from "react-router-dom";


function Header() {
    return(
        
        <header className="menu-footer">
            <div className="content">
                <nav>
                    <ul>
                        <li> 
                            <Link to="/"> Home </Link> 
                        </li>

                        <li>
                            <Link to="/Search">Search </Link>
                        </li>
                        <li>
                            <Link to="/Newpost">New </Link>
                            
                        </li>
                        <li>
                            <Link to="/Mensagens">Mensagens </Link>
                        </li>
                        <li>
                            <Link to="/PerfilUser">Perfil </Link>
                            
                        </li>
                    </ul>
                </nav>
           
            </div>
        </header>
       
    );
}

export default Header;