import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './Product2.css';
import axios from "axios";

const Product2 = () => {

  const [product2, setProduct2] = useState([]);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/product2_details")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setProduct2(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  const saveProduct =(data)=>{

    axios.post("http://localhost:8080/api/auth/add_product",data)

    .then((response) => {

      console.log(response)

    })

    .catch((error)=>{

      console.log(error)



    })

    }

  return (
    <div className="Product2">
      <h1 className="Product2Heading">Ghee</h1>
      <div className="Product2PageContainer">
        <div className="filterContainer">
          {/* <button>Filter</button> */}
        </div>
        <div className="product2List">
          {product2 &&
            product2.map((product_two) => {
              return (
                <div key={product_two.id} className="product2Card">
                  <img
                    src={product_two.image}
                    className="product2Image"
                    width={150} height={150}
                  />
                  <div>
                    {product_two.product2_name} - Rs. {product_two.price}/-
                  </div>
                  
                  <Link to="/cart" product2={product_two} > 
                  {/* <button type="button" class="button">Add to Cart</button>  */}
                  
                  {/* <button onClick={()=> saveProduct} >Add To Cart</button> */}
                  <button onClick={saveProduct}> Add to Cart</button>
                  </Link>
                  
                  
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product2;

