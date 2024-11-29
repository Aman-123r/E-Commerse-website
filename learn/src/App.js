// import React, { useState } from 'react'
// import {BrowserRouter , Routes , Route} from "react-router-dom" ; 
// import Registration from './components/Registration';
// import Login from './components/Login';
// import Navbar from './components/Navbar';
// import { contextapi } from './Contextapi';
// import AdminDashboard from './components/AdminDashboard';
// import FoodProducts from './components/FoodProducts';
// import AdminInsertForm from './components/AdminInsertForm';
// import AdmineditForm from './components/AdmineditForm';
// import CartPage from './components/CartPage';
// import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
//   const [cart , setCart]  = useState()

//   const [loginname, setLoginName] = useState(localStorage.getItem("loginname"))

  


//   return (
//     <div>
//       <BrowserRouter>
//       <contextapi.Provider value={{ loginname, setLoginName  ,cart , setCart ,  }}>
//       <Navbar/>
//       <Routes>
//         <Route path = "/Reg" element={<Registration/>}/>
//         <Route path = "/Login" element={<Login/>}/>
//         <Route path = "/dashboard" element={ <ProtectedRoute> <AdminDashboard/> </ProtectedRoute>}/>
//         <Route path = "/foodProducts" element={<ProtectedRoute> <FoodProducts/> </ProtectedRoute>}/>
//         <Route path = "/AdminInsertForm" element={ <ProtectedRoute><AdminInsertForm/> </ProtectedRoute>}/>
//         <Route path="/adminproductupdate/:id" element={ <ProtectedRoute><AdmineditForm/> </ProtectedRoute>}/>
//         <Route path  = "/addtocartpage" element = {  <ProtectedRoute><CartPage/>  </ProtectedRoute>}/>


//       </Routes>
//       </contextapi.Provider>
//       </BrowserRouter>

    
//     </div>
//   )
// }

// export default App

//----------------------------------------------------------------------------------------------------


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { contextapi } from './Contextapi';
import AdminDashboard from './components/AdminDashboard';
import FoodProducts from './components/FoodProducts';
import AdminInsertForm from './components/AdminInsertForm';
import AdmineditForm from './components/AdmineditForm';
import CartPage from './components/CartPage';
import ProtectedRoute from './components/ProtectedRoute';
import AboutUs from './components/AboutUS';



const App = () => {

  const getCart = ()=>{
    const cart = localStorage.getItem("cart");
    if(cart){
      return JSON.parse(cart);
    }
    return {}
  }

  const [cart, setCart] = useState(getCart());
  const [loginname, setLoginName] = useState(localStorage.getItem("loginname"));

  return (
    <div>
      <BrowserRouter>
        <contextapi.Provider value={{ loginname, setLoginName, cart, setCart }}>
          <Navbar />
          
          <Routes>
            {/* Default route points to FoodProducts */}
            <Route path="/" element={<FoodProducts />} />
            <Route path="/Reg" element={<Registration />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/About' element={<AboutUs/>}/>
          
            <Route path="/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
           
            <Route path="/foodProducts" element={<FoodProducts />} />
            <Route path="/AdminInsertForm" element={<ProtectedRoute><AdminInsertForm /></ProtectedRoute>} />
            <Route path="/adminproductupdate/:id" element={<ProtectedRoute><AdmineditForm /></ProtectedRoute>} />
            <Route path="/addtocartpage" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          </Routes>
        
        </contextapi.Provider>
        
      </BrowserRouter>
    </div>
  );
};

export default App;





