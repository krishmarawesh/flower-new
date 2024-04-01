import './header.css'
import { MdPeopleAlt } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


function Header (){
  return (
    <>
    <div className='Main_box'>
       <nav>
        <div className='nav-contenar'>
         <h1> <span>flower</span> shope</h1>
          <div className='Menu'>

            <p> <span>Home</span> </p>
            <p>Shop</p>
            <p>Blog</p>
            <p>About</p>
           
          </div>
          <div className='ican-bu'>
          <  MdPeopleAlt />
            <FaShoppingCart />
          </div>
          </div>
       </nav>
       <div className='Header-contenar'>
        <div className="headerItem">
        <h1>Flowers, 🌻 <br />
         what the world <br /> needs </h1>
         <h3>Browse between hounders of flowers</h3>
         <button>Browse</button>
        </div>
         <div className="imgheader">
          <img src="../pic1-1.svg" alt="" />
          <img src="../pic1-2.svg" alt="" />
          <img src="../pic1-3.svg" alt="" /> <br />
          <img src="../pic1-4.svg" alt="" />
          <img src="../pic1-5.svg" alt="" />
          <img src="../pic1-6.svg" alt="" />
         
        </div> 
     </div>


  </div>
       </>    

  );
}


export {Header}