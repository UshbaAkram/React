import { useEffect, useState } from "react";
import { Alert } from 'react-bootstrap';
import { Card, Button, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'react-bootstrap';

const Navbar = () => {
    const [data, setData] = useState(null);
fetch('https://dummyjson.com/products/1')
.then((res) =>{return res.json()})
.then((dat)=>{
    setData(dat)
    console.log("data is loaded")
    console.log(data)});
   return <>
        <Alert variant="primary">This is a primary alert—check it out!</Alert>

     <Card style={{ width: '18rem' }}>
            <CardImg variant="top" src="https://tse1.mm.bing.net/th?id=OIP.4cmK9d36bF0F7-V-SaVPnAHaG_&pid=Api&P=0&h=220" />
            <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <Button variant="primary">Go somewhere</Button>
            </CardBody>
        </Card>


    </>

//     const logo ="E-commerce\src\assets\logo.jpg"
//     return (  
//         // <div className="nav" >
//         //     <a href="#">
//         //     <img src={logo} alt="hu" className="logo"/>
//         // </a>
//         // <div className="navLink">
//         // <a href="#" className="nav-Link">Home</a>
//         // <a href="#" className="nav-Link">Top rated</a>
//         // <a href="#" className="nav-Link">Kids Wear</a>
//         // <a href="#" className="nav-Link">Mens Wear</a>
//         // <input type="text" placeholder="search"/>
//         // </div>
//         // </div>
// <h1>hu</h1>        
//     )
// }
}
export default Navbar;
// import { useState } from 'react';
// import  styles from './Navbar.module.css';

// function Navbar() {
//   // adding the states 
//   const [isActive, setIsActive] = useState(false);

//   //add the active class
//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };

//   //clean up function to remove the active class
//   const removeActive = () => {
//     setIsActive(false)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">

//         <nav className={`${styles.navbar}`}>

//           {/* logo */}
//           <a href='#home' className={`${styles.logo}`}>Dev. </a>

//           <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
//             <li onClick={removeActive}>
//               <a href='#home' className={`${styles.navLink}`}>Home</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href='#home' className={`${styles.navLink}`}>Catalog</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href='#home' className={`${styles.navLink}`}>All products</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href='#home' className={`${styles.navLink}`}>Contact</a>
//             </li>
//           </ul>

//           <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
//             <span className={`${styles.bar}`}></span>
//             <span className={`${styles.bar}`}></span>
//             <span className={`${styles.bar}`}></span>
//           </div>
//         </nav>

//       </header>
//     </div>
//   );
// }

// export default Navbar;