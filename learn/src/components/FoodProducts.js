// import React, { useContext, useEffect, useState } from 'react'
// // import React from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';


// const FoodProducts = () => {

//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);


//   useEffect(()=>{

//       fetch("/api/usershowlist")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           if (data.status === 200) {
//             setProduct(data.apiData);
//           } else {
//             setMessage(data.message);
//           }
//         })
//   },[])

//   const { cart, setCart } = useContext(contextapi);

//   function handlecart(e, productid) {
//     console.log(productid);

//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart);
//     console.log(_cart);
//   }


//   return (
//  <>


// <MDBContainer>
// <MDBRow>
// {product.map((product, key) => (
// <MDBCol size='md-4 mt-3'>
// <MDBCard id="productimage" >
//       <MDBCardImage  src={`upload/${product.PImg}`}  style={{ height: "20rem" }}  position='top' alt='...' />
//       <MDBCardBody>
//         <MDBCardTitle>{product.PName}</MDBCardTitle>
//         <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//         <MDBCardText>
//          {product.PDesc}
//         </MDBCardText>
//         <MDBBtn href='#' onClick={(e) => { handlecart(e, product._id) }}>Add To Cart</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
// </MDBCol>
//      ))}
// </MDBRow>
// </MDBContainer>
//  </>
//   )
// }

// export default FoodProducts

//----------------------------------------------------------------------------------


// import React, { useContext, useEffect, useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';

// const FoodProducts = () => {
//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);
//   const [showLoginAlert, setShowLoginAlert] = useState(false); // State for login prompt

//   const { cart, setCart, user } = useContext(contextapi); // Assuming 'user' context indicates login status

//   useEffect(() => {
//     fetch("/api/usershowlist")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.status === 200) {
//           setProduct(data.apiData);
//         } else {
//           setMessage(data.message);
//         }
//       });
//   }, []);

//   function handlecart(e, productid) {
//     // Check if the user is logged in before adding the product to the cart
//     if (!user) {
//       // If the user is not logged in, show the login alert
//       setShowLoginAlert(true);
//       return;
//     }

//     console.log(productid);

//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart);
//     console.log(_cart);
//   }

//   return (
//     <>
//       {showLoginAlert && (
//         <div className="alert alert-warning" role="alert">
//           You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
//           <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
//         </div>
//       )}
//       <MDBContainer>
//         <MDBRow>
//           {product.map((product, key) => (
//             <MDBCol size='md-4 mt-3' key={key}>
//               <MDBCard id="productimage">
//                 <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position='top' alt='...' />
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.PName}</MDBCardTitle>
//                   <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//                   <MDBCardText>
//                     {product.PDesc}
//                   </MDBCardText>
//                   <MDBBtn href='#' onClick={(e) => { handlecart(e, product._id) }}>Add To Cart</MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default FoodProducts;


//--------------------------------------------------------------------------------------------------------

// import React, { useContext, useEffect, useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';

// const FoodProducts = () => {
//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);
//   const [showLoginAlert, setShowLoginAlert] = useState(false); // State for login prompt

//   const { cart, setCart, user, setUser } = useContext(contextapi); // Assuming 'user' context indicates login status

//   useEffect(() => {
//     // Fetch the product list
//     fetch("/api/usershowlist")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.status === 200) {
//           setProduct(data.apiData);
//         } else {
//           setMessage(data.message);
//         }
//       });
//   }, []);

//   // Handle adding the product to the cart
//   function handlecart(e, productid) {
//     // Check if the user is logged in before adding the product to the cart
//     if (!user) {
//       // If the user is not logged in, show the login alert
//       setShowLoginAlert(true);
//       return;
//     }

//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart); // Update the cart context
//     console.log(_cart);
//   }

//   // Example of a login handler (you should replace this with your actual login function)
//   const handleLogin = (userInfo) => {
//     // Simulate login and update the user context
//     setUser(userInfo); // Assume userInfo contains user data after successful login
//     setShowLoginAlert(false); // Close the login alert
//   };

//   return (
//     <>
//       {showLoginAlert && (
//         <div className="alert alert-warning" role="alert">
//           You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
//           <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
//         </div>
//       )}

//       <MDBContainer>
//         <MDBRow>
//           {product.map((product, key) => (
//             <MDBCol size='md-4 mt-3' key={key}>
//               <MDBCard id="productimage">
//                 <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position='top' alt='...' />
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.PName}</MDBCardTitle>
//                   <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//                   <MDBCardText>
//                     {product.PDesc}
//                   </MDBCardText>
//                   <MDBBtn href='#' onClick={(e) => handlecart(e, product._id)}>Add To Cart</MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default FoodProducts;

//------------------------------------------------------------------------------------------

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import React, { useContext, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { MDBIcon } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { contextapi } from '../Contextapi';

const FoodProducts = () => {
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState([]);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [inputtext, setInputtext] = useState("");  // State for login prompt

  const { cart, setCart, loginname, setUser } = useContext(contextapi); // Assuming 'user' context indicates login status
console.log(loginname)
  useEffect(() => {
    // Fetch the product list
    fetch("/api/usershowlist")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setProduct(data.apiData);
        } else {
          setMessage(data.message);
        }
      });
  }, []);

  // Handle adding the product to the cart
  function handlecart(e, productid) {
    
    // Check if the user is logged in before adding the product to the cart
    if (!loginname) {
      // If the user is not logged in, show the login alert
      setShowLoginAlert(true);
      return;
    }

    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }

    if (!_cart.items[productid]) {
      _cart.items[productid] = 1;
    } else {
      _cart.items[productid] += 1;
    }

    if (!_cart.totalitems) {
      _cart.totalitems = 1;
    } else {
      _cart.totalitems += 1;
    }

    setCart(_cart); // Update the cart context
    console.log(_cart);
    localStorage.setItem("cart",JSON.stringify(_cart));
  }

  // Example of a registration handler (you should replace this with your actual registration logic)
  const handleRegistration = (userInfo) => {
    // Simulate registration and update the user context
    setUser(userInfo); // Assume userInfo contains user data after successful registration
    setShowLoginAlert(false); // Close the login alert after successful registration
  };

  const inputhandler = (e) => {
    setInputtext(e.target.value.toLowerCase());
  };

  return (
    <>
        <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='redmi.webp' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h2>Redmi 13</h2>
          <h3>(12 RAM 256 GB)</h3>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='123.webp' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='12345.webp' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  
      {showLoginAlert && (
        <div className="alert alert-warning" role="alert">
          You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
          <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
        </div>
      )}

      <div>

      <MDBContainer>
             <input id="search"
        type="search"
        className="form-control rounded mt-3"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={inputhandler}
        value={inputtext} // Use 'value' instead of 'val'
      />
      </MDBContainer>
      </div>

      <MDBContainer>
        <MDBRow>
          {product
           .filter((el) => el.PName.toLowerCase().includes(inputtext))
          .map((product, key) => (
            <MDBCol size='md-3 mt-3' key={key}>
              <MDBCard id="productimage">
                <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{product.PName}</MDBCardTitle>
                  <MDBCardTitle>{product.PPrice}</MDBCardTitle>
                  <MDBCardText>
                    {product.PDesc}
                  </MDBCardText>
                  <MDBBtn href='#' onClick={(e) => handlecart(e, product._id)}>Add To Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      <footer className="main-footer">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We offer an exclusive range of diamond jewelry with timeless elegance and stunning craftsmanship.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#returns">Return Policy</a></li>
            <li><a href="#shipping">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Trade Name: Rathore Electronic Shop</p>
          <p>Email: <a href="aman@gmail.com">aman@gmail.com</a></p>
          <p>Address: kota, India</p>
          <p>Country/Region: India</p>
         
        </div>

        {/* Payment Methods and Social Media Section */}
        <div className="footer-section payment-social">
          <h3>Payment & Shipping</h3>
          <p>We accept payments through PayPal. It's a safe payment gateway for both you and us.</p>
          <p>Processing Time: 2-3 days</p>
          <p>India Delivery Time: 5-7 days</p>
          <p>International Delivery Time: 15-18 days</p>

          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <MDBIcon fab icon="facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <MDBIcon fab icon="twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Rathore Electronic Shop. All Rights Reserved.</p>
        <p>Powered by Shopify</p>
      </div>
    </footer>
    </>
  );
};

export default FoodProducts;


//---------------------------------------------------------------------------------------

// import React, { useContext, useEffect, useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';

// const FoodProducts = () => {
//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);
//   const [showLoginAlert, setShowLoginAlert] = useState(); // State for login prompt

//   const { cart, setCart, user, setUser } = useContext(contextapi); // Assuming 'user' context indicates login status

//   useEffect(() => {
//     // Fetch the product list from your API or database
//     fetch("/api/usershowlist")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.status === 200) {
//           setProduct(data.apiData);
//         } else {
//           setMessage(data.message);
//         }
//       });
//   }, []);

//   //Handle adding the product to the cart
//   function handlecart(e, productid) {
//     // Check if the user is logged in before adding the product to the cart
//     if (!user) {
//       // If the user is not logged in, show the login alert
//       setShowLoginAlert("please logged in ");
//       return;
//     }else{
//       console.log("hello")
//     }

//     // If the user is logged in, add the product to the cart
//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart); // Update the cart context
//     console.log(_cart);
//   }

//   // Example of a registration handler (you should replace this with your actual registration logic)
//   const handleRegistration = (userInfo) => {
//     // Simulate registration and update the user context
//     setUser(userInfo); // Assume userInfo contains user data after successful registration
//     setShowLoginAlert(false); // Close the login alert after successful registration
//   };

//   return (
//     <>
//       {/* If the user is not logged in, show the alert */}
//       {showLoginAlert && (
//         <div className="alert alert-warning" role="alert">
//           You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
//           <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
//         </div>
//       )}

//       <MDBContainer>
//         <MDBRow>
//           {product.map((product, key) => (
//             <MDBCol size='md-4 mt-3' key={key}>
//               <MDBCard id="productimage">
//                 <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position='top' alt='...' />
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.PName}</MDBCardTitle>
//                   <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//                   <MDBCardText>{product.PDesc}</MDBCardText>
//                   {/* <MDBBtn
//                     href='#'
//                     onClick={(e) => handlecart(e, product._id)}
//                     disabled={!user} // Disable the button if the user is not logged in
//                   >
//                     Add To Cart
//                   </MDBBtn> */}

// <MDBBtn
//   href="#"
//   onClick={(e) => handlecart(e, product._id)}
//   disabled={!user} // Disable the button if the user is not logged in
// >
//   {user ? 'Add To Cart' : 'Log in to Add'} {/* Dynamic text based on login state */}
// </MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default FoodProducts;


//-----------------------------------------------------------------------------------------



// import React, { useContext, useEffect, useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { contextapi } from '../Contextapi';

// const FoodProducts = () => {
//   const [message, setMessage] = useState("");
//   const [product, setProduct] = useState([]);
//   const [showLoginAlert, setShowLoginAlert] = useState(false); // State for login prompt

//   const { cart, setCart, user, setUser } = useContext(contextapi); // Assuming 'user' context indicates login status

//   useEffect(() => {
//     // Fetch the product list
//     fetch("/api/usershowlist")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 200) {
//           setProduct(data.apiData);
//         } else {
//           setMessage(data.message);
//         }
//       });
//   }, []);

//   // Handle adding the product to the cart
//   function handlecart(e, productid) {
//     // Check if the user is logged in before adding the product to the cart
//     if (!user) {
//       // If the user is not logged in, show the login alert
//       setShowLoginAlert(true);
//       return;
//     }

//     let _cart = { ...cart };

//     if (!_cart.items) {
//       _cart.items = {};
//     }

//     if (!_cart.items[productid]) {
//       _cart.items[productid] = 1;
//     } else {
//       _cart.items[productid] += 1;
//     }

//     if (!_cart.totalitems) {
//       _cart.totalitems = 1;
//     } else {
//       _cart.totalitems += 1;
//     }

//     setCart(_cart); // Update the cart context
//   }

//   // Function to get button properties based on user login status
//   function getAddToCartButtonProps() {
//     if (!user) {
//       return {
//         disabled: true,
//         buttonText: "Log in to Add", // Text when user is not logged in
//       };
//     }
//     return {
//       disabled: false,
//       buttonText: "Add To Cart", // Text when user is logged in
//     };
//   }

//   return (
//     <>
//       {showLoginAlert && (
//         <div className="alert alert-warning" role="alert">
//           You need to <strong>log in</strong> or <strong>register</strong> to add products to the cart!
//           <button onClick={() => setShowLoginAlert(false)} className="btn-close" aria-label="Close"></button>
//         </div>
//       )}

//       <MDBContainer>
//         <MDBRow>
//           {product.map((product, key) => (
//             <MDBCol size="md-4 mt-3" key={key}>
//               <MDBCard id="productimage">
//                 <MDBCardImage src={`upload/${product.PImg}`} style={{ height: "20rem" }} position="top" alt="..." />
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.PName}</MDBCardTitle>
//                   <MDBCardTitle>{product.PPrice}</MDBCardTitle>
//                   <MDBCardText>{product.PDesc}</MDBCardText>

//                   {/* Use the helper function to get button properties */}
//                   <MDBBtn
//                     href="#"
//                     onClick={(e) => handlecart(e, product._id)}
//                     disabled={getAddToCartButtonProps().disabled} // Dynamic disabled state
//                   >
//                     {getAddToCartButtonProps().buttonText} {/* Dynamic button text */}
//                   </MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default FoodProducts;
