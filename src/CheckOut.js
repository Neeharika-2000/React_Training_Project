import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Placeholder } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { FaCentercode } from 'react-icons/fa';

const Checkout = () => {
    const {
       
        emptyCart,
    } = useCart();
    

    const PlaceOrder=()=>{

        alert("order placed succesfully");
        emptyCart();
        const totalPath = `/cart`;
//   history.push(totalPath);

    }
 return(
        <div>
            
            <center>
            <h1>Payment details</h1>
            </center>
            <button onClick={()=>{}}>PHONE PAY</button><br></br>
            <button onClick={()=>{}}>PAYTM</button><br></br>
            <h3>Pay with Debit/Credit/ATM Cards</h3>
            <p>Enter card details</p>
            <input className='register-form-element'  placeholder="Card Name" required type='text'></input>
            <input className='register-form-element'  placeholder="Card Number" required type='number'></input>
        
            <input className='register-form-element'  placeholder="Cvv" required type='password'></input><br></br>
            
            <br></br>
            <button onClick={()=>{}}>CASH ON DELIVERY(COD)</button><br></br>

            <br></br>
            <br></br>
            <center>
            <button onClick={e => PlaceOrder(e)}>Submit</button>
            </center>
           
            
        </div>
    )
}

export default Checkout;

