// import React from 'react';
// import go from './go.png';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
  
// const Navbar = () => {
//   return (
//     <>
//       <nav>
        
//         {/* <div class="nav-box" to='/' activeStyle>
//         {/* <img src={go} width="80" height="80"></img> */}
//         {/* </div> */} 
//         <div className="nav-box">
//         {/* <NavLink to='/OilsGhee' activeStyle>
        
//           <h1>OilsGhee Divine</h1>
//           </NavLink> */}
//           <div className="About"  to='/about' activeStyle>
//             About
//           </div>
//           <div className="Contact"  to='/contact' activeStyle>
//             Contact
//           </div>
//           <div className="SignIn"  to='/sign-in' activeStyle>
//             Sign In
//           </div>
//           <div className="SignUp"  to='/sign-up' activeStyle>
//             Sign-Up
//           </div>
//           {/* <NavLink to='/contact' activeStyle>
//             Contact
//           </NavLink>
//           <NavLink to='/sign-up' activeStyle>
//             Sign Up
//           </NavLink>
//           <NavLink to='/sign-in' activeStyle>
//             Sign In
//           </NavLink> */}
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </div>
//         {/* <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn> */}
//       </nav>
//     </>
//   );
// };
  
// export default Navbar;
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';

//import Contact from "./Contact.js";

import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./navbar.css";
import { Navigate } from "react-router-dom";
import {NavLink as ReactLink, useNavigate} from "react-router-dom";
// import go from './go.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
const Navbar = () => {
  const navigate=useNavigate();
  const getCookie = (cname) => {

    let name = cname + "=";

    let decodedCookie = decodeURIComponent(document.cookie);

    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {

        let c = ca[i];

        while (c.charAt(0) == ' ') {

            c = c.substring(1);

        }

        if (c.indexOf(name) == 0) {

            return c.substring(name.length, c.length);

        }

    }

    return "";

}

const signoutHandler = () => {

  console.log("logout")
  localStorage.clear();


  console.log(window.location);

  document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  window.location.href = '/';

}


const user= JSON.parse(localStorage.getItem('user-info'))

console.warn(user)
function logout()

{

localStorage.clear();

navigate('/')

}

  return (
    <>
    
    {getCookie("accessToken") &&
    <nav>
      <div className="nav_box">
         {/* <span className="my_shop" >
        
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/Home'>OilsGhee</Link>
         <img src={go} width="80" height="80"></img> 
        </span>  */}
        <span className="About" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }}to='/about'>About</Link>
         </span>
        
        <span className="Contact" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/Contact'>Contact</Link>
        </span>
        <span className="LogOut" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/'  onClick={signoutHandler}>Log Out</Link>
        </span>
        </div>
        </nav>
        }
        {/* <span className="SignIn" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/sign-in'>Sign In</Link>
        </span>
        <span className="SignUp" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/sign-up'>Sign Up</Link>
        </span> */}

        {!(getCookie("accessToken")) &&
           <nav>
           <div className="nav_box">
           <span className="my_shop" >
        
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/Home'>OilsGhee</Link>
        {/* <img src={go} width="80" height="80"></img> */}
        </span>
             <span className="About" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }}to='/about'>About</Link>
         </span>
        
        <span className="Contact" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/Contact'>Contact</Link>
        </span>
        <span className="SignIn" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/sign-in'>Sign In</Link>
        </span>
        <span className="SignUp" >
        <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/sign-up'>Sign Up</Link>
        </span>

        {/* <div className="cart">
          <span>
            <i class="fas fa-cart-plus"></i>
          </span>
          <span>0 </span>
        </div> */}

        </div>
        </nav>
        }
     </>
  );
};

export default Navbar;







{/* // import React from 'react';
// import go from './go.png';
// import { */}
{/* //   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
  
// const Navbar = () => { */}
{/* //   return (  
//     <>
//       <Nav>
//         <Bars />
//         <NavLink to='/' activeStyle>
//         <img src={go} width="80" height="80"></img>
//         </NavLink>
//         <NavMenu>
//         {/* <NavLink to='/OilsGhee' activeStyle>
        
//           <h1>OilsGhee Divine</h1>
//           </NavLink> */}
{/* //           <NavLink to='/about' activeStyle>
//             About
//           </NavLink>
//           <NavLink to='/contact' activeStyle>
//             Contact
//           </NavLink>
//           <NavLink to='/sign-up' activeStyle>
//             Sign Up
//           </NavLink>
//           <NavLink to='/sign-in' activeStyle>
//             Sign In
//           </NavLink> */}
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
{/* //         </NavMenu> */}
//         {/* <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn> */}
//       </Nav>
//     </>
//   );
// };
  
// export default Navbar; */}