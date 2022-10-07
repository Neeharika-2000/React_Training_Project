// import React from 'react';
  
// const Contact = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Center',
//         alignItems: 'Center',
//         height: '100vh'
//       }}
//     >
      
//  <ul >

// <li>
//   <h1>==>CONTACT US: 8765432109</h1>
// </li>

// <li> <p>==>Please contact the admin email-id:admin@gmail.com for password change</p></li>


// </ul>
//     </div>
//   );
// };
  
// export default Contact;

import React from 'react';

import './Contact.css';

 

const Contact = () => {

  return (

    <div className="Contact"

      style={{

        display: 'flex',

        justifyContent: 'Center',

        alignItems: 'Center',

        height: '100vh'

      }}

    >

      <img src = "https://st.depositphotos.com/1265075/2916/i/600/depositphotos_29165825-stock-photo-website-contact-us-icons-on.jpg"></img>

      <h2> For any queries and change password please contact Admin:  <br/> <br/> 

       

        Email   :  neeharika@gmail.com <br/>

        Address :  Amogaya Industry <br/>

                   Narayanapuram <br/>

                   Tirupati, Andhra Pradesh 517502, <br/>

                   India <br/>

        Call now : 9390143430 

      </h2>

      {/* https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?k=20&m=1168945108&s=612x612&w=0&h=MqKJyjMB1NJ33aRB9kjhxqP_GbPmEVB11saJi9sCuwM= */}

     

    </div>

  );

};

 

export default Contact;