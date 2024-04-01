import { FaShoppingCart } from "react-icons/fa";
import "./bestselers.css";
function Bestselers() {
  return (
    <>
      <div className="bestselers">
        <div className="main-contenar">
          <h1> -------------------- Best selers ---------------------</h1>
        </div>
        <div className="All-img">
          <div className="img1">
            <img src="../pic2-1.svg" alt="" />
            <h6>Daisy</h6>
            <h5>5$</h5>
            <p>
              <button>
                {" "}
                <FaShoppingCart />
                Add to cart
              </button>
            </p>
          </div>
          <div className="img2">
            <img src="../pic2-2.svg" alt="" />
            <h6>Sun flower</h6>
            <h5>5$</h5>
            <p>
              <button>
                {" "}
                <FaShoppingCart />
                Add to cart{" "}
              </button>
            </p>
          </div>
          <div className="img3">
            <img src="../pic2-3.svg" alt="" />
            <h6>White Rose</h6>
            <h5>5$</h5>
            <p>
              <button>
                {" "}
                <FaShoppingCart />
                Add to cart{" "}
              </button>
            </p>
          </div>
          <div className="img4">
            <img src="../pic2-4.svg" alt="" />
            <h6>Periwinkle</h6>
            <h5>5$</h5>
            <p>
              <button>
                <FaShoppingCart />
                Add to cart
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export { Bestselers };
