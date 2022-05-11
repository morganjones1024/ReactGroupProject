import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          MaraEcommerce
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/*    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>*/}
              <Link className={"nav-link"} to="/">
                Home
              </Link>
            </li>
          
          </ul>
          <span className="navbar-text">
          <Link className={"nav-link"} to="/cart">
              <ShoppingCartIcon />
              </Link>
          </span>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
