import { FaHeart } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import "./LatestPosts.css";
function LatestPosts () {
  return (
    <>
    <div className="LatestPost">
  
  <div className='main2-h1'>
        <h1> -------------------- Latest posts ---------------------</h1>
     
  </div>
  <div className="main2">
          
    <div className="cart1">
     
       <img className='pic' src="../Ellipse.svg" alt="" />
      <h3>Emily</h3> 
      <h4>2022/22/8</h4>
      <img  className='picter' src="../pic3-1.svg" alt="" />
      <h5> Best flowers for inside home</h5> <br />
      <h6> All the flowers are best four lovly house <br /> just get the one you love the most😃</h6>
     <p>  <FaHeart   />15 </p>            
      <p> <IoIosEye />2001</p>
      <h2>Read more</h2>
    </div>
    
    <div className="cart2">
      <img className='pic' src="../Ellipse.svg" alt="" />
      <h3>Emily</h3> 
      <h4>2022/22/8</h4>
      <img  className='picter' src="../pic3-2.svg" alt="" />
      <h5> Best flowers for inside home</h5> <br />
      <h6> All the flowers are best four lovly house <br /> just get the one you love the most😃</h6>
     <p>  <FaHeart   />15 </p>            
      <p> <IoIosEye />2001</p>
      <h2>Read more</h2>
    </div>

    <div className="cart3">
      <img className='pic' src="../Ellipse.svg" alt="" />
      <h3>Emily</h3> 
      <h4>2022/22/8</h4>
      <img  className='picter' src="../pic3-3.svg" alt="" />
      <h5> Best flowers for inside home</h5> <br />
      <h6> All the flowers are best four lovly house <br /> just get the one you love the most😃</h6>
     <p>  <FaHeart   />15 </p>            
      <p> <IoIosEye />2001</p>
      <h2>Read more</h2>
    </div>

</div>
</div>
    
      </>
  );
}
export { LatestPosts };
