import React,{ Component }  from 'react'

import { useNavigate } from 'react-router-dom';

import "./SuccessfulLogin.css";

export default function SuccessfulLogin() {

    let navigate=useNavigate();

return (
 <div className='neeha'>
 <center>
<button class="testing" onClick={()=>{navigate("/Product")}}>OILS</button>

 <button class="testing" onClick={()=>{navigate("/Product2")}}>GHEE</button>

 </center>

    <center>

           <h1>Heyy!!! Welcome, You have Successfully Logged In ! !</h1>

{/*    <img src="https://thumbs.dreamstime.com/b/welcome-sign-11221558.jpg" /> */}

           </center>
 </div>

        )

}

