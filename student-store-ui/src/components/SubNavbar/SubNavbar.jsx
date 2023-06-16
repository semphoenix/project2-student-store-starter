import { Link } from "react-router-dom";
import "./SubNavbar.css";

export default function SubNavbar({ categoryList, handleSearch }) {
  return (
    <nav class="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleSearch}
            />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              Help
              <i className="material-icons">help</i>
            </span>
            <div className="cart">
              <Link>
                My Cart
                <i className="material-icons">shopping_cart</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu">{categoryList}</ul>
        </div>
      </div>
    </nav>
  );
}
