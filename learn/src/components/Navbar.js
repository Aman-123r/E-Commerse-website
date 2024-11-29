// import React, { useContext } from 'react'
// import { contextapi } from '../Contextapi'
// import { Link, useNavigate } from 'react-router-dom'

// const Navbar = () => {

//   const navigate = useNavigate()

//   const { loginname, setLoginName, cart  } = useContext(contextapi)

//   function handlelogout(e) {
//     e.preventDefault() // Prevent default behavior of anchor tag
//     localStorage.removeItem("loginname")
//     setLoginName(null) // Or set it to an empty string if that's your logic
//     navigate("/Login")
//   }

//   // function handlelogout(){
//   //     setLoginName(localStorage.removeItem("loginname"))
//   //     navigate("/Login")
//   // }
//   return (
//     <div className='container-fluid' id="navbar">
//       <div className='row'>
//         <div className='col-md-12'>
//           <nav className="navbar navbar-expand-lg ">
//             <div className="container-fluid">
//               <a className="navbar-brand" href="#"><i class="bi bi-amazon"></i></a>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                   {loginname ?
//                     <>
//                       <li className="nav-item">
//                         <a className="nav-link active" aria-current="page" href="foodProducts"> {loginname}</a>
//                       </li>

//                       {/* <li className="nav-item"> */}
//                       {/* <Link className="nav-link" to="#">cart</Link> */}
//                       {/* <Link to="/addtocartpage">  <button className='btn btn-primary' ><i class="bi bi-cart-dash-fill"></i> <sup id="cartcount">{cart?.totalitems ?? 0}</sup></button> </Link> */}
//                       {/* </li> */}

//                       {loginname !== "admin" && (
//                         <li className="nav-item">
//                           <Link to="/addtocartpage">
//                             <button className='btn btn-primary'>
//                               <i className="bi bi-cart-dash-fill"></i>
//                               <sup id="cartcount">{cart?.totalitems ?? 0}</sup>
//                             </button>
//                           </Link>
//                         </li>
//                       )}

//                       <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                           settings
//                         </a>
//                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="drop"  >
//                           <li><a className="dropdown-item" href="#">Action</a></li>
//                           <li><a className="dropdown-item" href="#">Another action</a></li>
//                           <li><hr className="dropdown-divider" /></li>
//                           <li><Link class="dropdown-item" to="#" onClick={handlelogout}>Logout</Link></li>
//                         </ul>
//                       </li>
//                     </>
//                     :

//                     <></>
//                   }
//                 </ul>

//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Navbar

//---------------------------------------------------------------------------------------

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { contextapi } from "../Contextapi";

const Navbar = () => {
  const navigate = useNavigate();
  const { loginname, setLoginName, cart } = useContext(contextapi);

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("loginname");
    setLoginName(null);
    navigate("/Login"); // Redirect to login page after logout
  }

  return (
    <div className="container-fluid" id="navbar">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
               <h1 id="navlogo">Rathore Electronic Shop</h1>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {loginname ? (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                          {loginname}
                        </NavLink>
                      </li>
                  
                      <li class="nav-item">
                        <a class="nav-link" href="/About">
                        About Us
                        </a>
                      </li>
                      {loginname !== "admin" && (
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/addtocartpage">
                            <button className="btn btn-primary">
                              <i className="bi bi-cart-dash-fill"></i>
                              <sup id="cartcount">{cart?.totalitems ?? 0}</sup>
                            </button>
                          </NavLink>
                        </li>
                      )}
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Settings
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                          id="drop"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={handleLogout}
                            >
                              Logout
                            </a>
                          </li>
                        </ul>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Login">
                        Login
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
