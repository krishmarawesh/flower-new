import { IoLocationOutline } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "./Footer.css";
function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='footer-h1'>
        <h1> <span>Flower</span> Shop</h1>
        <p>Some random stuff about flower shop and <br />
        some more info cuz this box had to get fill <br />
        some random stuff about flower
        shop and <br />some more info cuz this box had to get fill
         <br />some random stuff about flowershop and<br />
        some more info cuz this box had to get fill </p>
      </div>
      <div className="links">
        <h1>Links</h1>
        <br />
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Login</li>
       
      </div>
      <div className="link">
        <h1>Links </h1>
        <br />
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Login</li>
        
      </div>
      <div className="contact">
        <h1>Contact </h1>
        <br />
          <li> <IoLocationOutline /> 26985 Brighton Lake Forest , CA</li>
          <li><MdOutgoingMail />Support@Flowers.com</li>
          <li><FaPhone /> +1 236 5489</li>
         
        
      </div>
  
    </div>
     
    </>
  );
}
export { Footer };
