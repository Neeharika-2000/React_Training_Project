 import React from 'react';
//import './App.css';
// import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
// import Contact from './Components/Navbar/Contact.js';
//import OilsGhee from './pages/OilsGhee';
import Product from "./Product.js";
import Navbar from "./Components/Navbar";
import Contact from './pages/Contact';
import Cart from './Cart';
import CheckOut from './CheckOut';
import SuccessfulLogin from './pages/SuccessfulLogin';
import Product2 from "./Product2.js";
  
function App() {
  return (
    <Router>
      <Navbar />
      
    <Routes>
           <Route index element={<Home/>} /> 
         <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
       <Route path='/Product' element={<Product/>} />
       <Route path='/Home' element={<Home/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/payment' element={<CheckOut/>} />
       <Route path='/SuccessfulLogin' element={<SuccessfulLogin/>} />
       <Route path='/Product2' element={<Product2/>} />
       

    
       </Routes>
    </Router>
  );
}
  
export default App;

// import Product from "./products.js";
// import Navbar from "./Components/Navbar/index.js";

//import Cart from "./components/cart";
// const App = () => {
  
//   return (
//     <React.Fragment>
//       <Navbar/>
//       <Product/>
//     </React.Fragment>
//   );
// };

// export default App;


//  import {Routes, Route, useNavigate} from 'react-router-dom';
// import Product from "./products.js";
// import Navbar from "./Components/Navbar/index.js";
 //import Contact from './pages/Contact';

//  export default function App() {

//   const navigate = useNavigate();

//   const navigateToContact = () => {
//     // 👇️ navigate to /contacts
//     navigate('/Contact.js');
//   };
// render(){
//   return (
    
//     <React.Fragment>
            
//          <div>
//       <div>
//       <Navbar/>
//       <Product/>
//          <button onClick={navigateToContact}>Contacts</button>

//         <Routes>
//         <Route path='/Contact' element={<Contact/>}/>
//         </Routes>
//       </div>
//     </div>
//            </React.Fragment>
//            }
//             );
//            };
//import './App.css';
// import Home from './Home';

// import Footer  from './Footer';

// import CheckoutCart from './CheckoutCart';
// import Header from './Header';
// import {ContextProvider, cartState, reducer } from './ContextProvider'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   return (
   // <ContextProvider reducer={reducer} cartState={cartState}>
//     <div>
     
//        <Router>
//        {/* <Header></Header> */}
//        <Route exact path="/product/:id">
//          <Product></Product>
//       </Route>
//       <Route exact path="/Contact">
//          <Contact></Contact>
//       </Route>
//        <Route exact path="/">
//          {/* <Home></Home> */}
//       </Route>      
//       </Router>
//       {/* <Footer></Footer> */}
//     </div>
//      </ContextProvider>
//   );
// }

// export default App;
       
  