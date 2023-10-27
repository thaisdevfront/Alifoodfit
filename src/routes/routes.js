import { Route, BrowserRouter, } from "react-router-dom";



import Home from "../pages/Home";
import Search from '../pages/Search';
import Newpost from '../pages/Newpost';
import Mensagens from "../pages/Mensagens";
import PerfilUser from "../pages/PerfilUser";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route  path="/" element = { Home }  />
           <Route path="/Search" element = { Search } />
           <Route path="/Newpost" element = { Newpost } />
           <Route path="/Mensagens" element = { Mensagens }  />
           <Route path="/PerfilUser" element = { PerfilUser }  />
       </BrowserRouter>
   )
}

export default Routes;