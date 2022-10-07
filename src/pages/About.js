// import React from 'react';
  
// const About = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Center',
//         alignItems: 'Center',
//         height: '100vh'
//       }}
//     >
//       <h1>WE ARE THE LEADING OILGHEE BRAND.Base:Tirupati</h1>
//     </div>
//   );
// }
  
// export default About;
import React from 'react';

import './About.css';




const About = () => {

  return (

    <div className="About"

      style={{

        display: 'flex',

        justifyContent: 'Center',

        alignItems: 'Center',

        height: '100vh'

     

      }}

    >

      {/* <h1>Its all about Currency Swap </h1> <br/> */}

      {/* <img src={Currency} width="80" height="70"></img> */}

      <img src = "https://media.istockphoto.com/photos/coconut-oil-picture-id136398161?b=1&k=20&m=136398161&s=612x612&w=0&h=6ZVfNxyBs_lKwgJB02g38W7kC1rnf35eoDl7PsIpEJw="></img> <br/>

      <div class="tag">            

               <h2>=>This is a OilsGhee ShoppingSite. <br/>=> We are in this industry for the longest time! <br/>

         =>Everything is organic now!!!<br/>=>Enjoy the purest forms of organic Oils and Ghee!! <br/>

        </h2>

        </div>

    </div>

  );

};

 

export default About;


