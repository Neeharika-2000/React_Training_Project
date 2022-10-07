// import React from 'react';
// import './signin.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
  
// const SignIn = () => {
//     const navigate = useNavigate();
//     const [username,setUserName] = useState("");
//     const [password,setPassword] = useState("");

//     const onInputChangeUserName = event => {
//         setUserName(event.target.value);
//       };
//     const onInputChangePassword = event => {
//     setPassword(event.target.value);
//     };

//     const data = {"username":username,"password":password};
//     const FormHandle = e => {
//         e.preventDefault();
//         addDataToServer(data)
//     }

//     const addDataToServer = (cred) => {
//         console.log(cred);
//         axios.post("http://localhost:8080/api/auth/signin", cred).then(
//             (response) => {
                
//                 console.log(response);
//                 alert("user signed in Successfully");
//                 if (response.status==200) {
//                   console.log("navigating");
//                   navigate('/Product');
//               }
//             }, (error) => {
//                 console.log(error);
//                 alert("Sign-In failed!");
//             }
//         );
//     }

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Left',
//         alignItems: 'Center',
//         height: '75vh',
        
//       }}
//     >
      
//       <div className='signin'>
//             <form onSubmit={e => FormHandle(e)} className="check-credentials-form">
//                 <br></br>
//                 <div id="email" class="form-group">
//                     <p id="hint"><strong>Enter username</strong></p>
//                     <input type="text" class="form-control" name="username"  placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)} required />
//                 </div><br></br>
//                 <div id="password" class="form-group">
//                     <p id="hint"><strong>Enter password</strong></p>
//                     <input type="password" class="form-control" name="password"  placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)}required />
//                 </div><br></br>
                
//                 <div className="btnsignin">
//                     <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign In</button><br></br>
                    
//                 </div>
//             </form>
//         </div>
//     </div>
//   );
// };

// export default SignIn;


import React from 'react';
import './signin.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
  
const SignIn = () => {
    const navigate = useNavigate();
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const onInputChangeUserName = event => {
        setUserName(event.target.value);
      };
    const onInputChangePassword = event => {
    setPassword(event.target.value);
    };

    const data = {"username":username,"password":password};
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(data)
    }
    function redirectforgot()

  { navigate('/Contact')

  }
  const setCookie= (cname, cvalue, exdays) => {

    const d = new Date();
  
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
  
    let expires = "expires="+ d.toUTCString();
  
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  
  }
 

    const addDataToServer = (cred) => {
        console.log(cred);
        axios.post("http://localhost:8080/api/auth/signin", cred).then(
            (response) => {
                
                console.log(response);
                // alert("user signed in Successfully");
                if (response.status==200) {
                  console.log("navigating");
                  setCookie("accessToken",response.data.accessToken,1);


                  
                  navigate('/SuccessfulLogin');
              }
            }, (error) => {
                console.log(error);
                alert("Invalidusername password");
            }
        );
    }

  return (
    
    <div className='stylesignin'      style={{
       display: 'flex',
        justifyContent: 'Center',
        
        alignItems: 'Center',
        height: '100vh'
        
      }}
    >
      
      {/* <h2>LogIn!!Enjoy the purest forms of oils and ghee!!! </h2> */}
      {/* <h3>Good health,happy family!!</h3> */}
     
     
      <div className='signin'>
      
            <form onSubmit={e => FormHandle(e)} className="check-credentials-form">
                <br></br>
                <div id="email" class="form-group">
                <p id="hint"><strong>Enter username</strong></p>
                    <input type="text" class="form-control" name="username"  placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)}required  />
                </div><br></br>
                <div id="password" class="form-group">
                <p id="hint"><strong>Enter password</strong></p>
                    <input type="password" class="form-control" name="password"  placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)} required />
                </div><br></br>
                
                <div className="btnsignin">
                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign In</button><br></br>
                    </div>   
                <br></br>
                <div className="btnforgetpassword">
                 {/* <Link type="submit" class="btn btn-outline-secondary my-2  text-center mr-2 " onClick={redirectforgot}>forgot password</Link><br></br>  */}
                 <Link to="/Contact">Forgot Password</Link>
                 </div>
                
            </form>
        </div>
        
    </div>
  
    
  );
};

export default SignIn;