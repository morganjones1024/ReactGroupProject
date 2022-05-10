import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
    <br/>
     <Link to="/cart">Cart</Link>
   </div>  );
}

export default Navbar;
