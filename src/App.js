import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Search from "./pages/Search";
import Newpost from "./pages/Newpost";
import Mensagens from "./pages/Mensagens";
import PerfilUser from "./pages/PerfilUser";
import Notification from "./components/Notification";

 function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Search" element={<Search/>} />
               <Route path="/Newpost" element={<Newpost/>} />
               <Route path="/Mensagens" element={<Mensagens/>} />
               <Route path="/PerfilUser" element={<PerfilUser/>} />
               <Route path="/Notification" element={<Notification/>} />
            </Routes>
         </Router>
         
         
       </>
   );
 }


export default App;





// // import logo from '../img/logo.png';
// import './App.css';
// import React from 'react';
// import Login from './pages/login/index.js';


// function App() {



//   return (
//     <div className="App">
//       <div id='intro' className="App-intro">
//         {/* <img className="App-logo" alt="logo" /> */}
//         <p>
//           Uma dieta mais saudável.
//         </p>
//         <button
//           className="btn-circle"
//           // href='./pages/login/index.js'
//           onClick={Login()}
//         >
//           Entrar
//         </button>
//       </div>
      
//     </div>
//   );
// }

// export default App;
