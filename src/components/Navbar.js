import React from "react"
import {Link} from "react-router-dom"
class Navbar extends React.Component{

    render(){
        return(
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a className="navbar-brand" href="#">
                    
                    Toko Buku
                </a>
 
                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid ms-4">
 
                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Gallery" className="nav-link">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                Cart
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Pegawai" className="nav-link">
                                Pegawai
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}
export default Navbar;



// import React from "react"
// import Navbar from "./components/Navbar"
// import Main from "./Main"
// import { NavLink } from "react-router-dom";
 
 
// class App extends React.Component{

//     render(){
//         return(
//             <div>
//         <nav className="navbar navbar-dark bg-dark">
//             <div className="container-fluid ms-4">
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/home">Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/karya">Karya</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/about">About</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/cart">Cart</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/pegawai">Pegawai</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         <Main/>
//       </div>
//     );
//   }
// }
        
// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
