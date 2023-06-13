import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import "../styles/style.css";

function HeaderSection(props) {
  return (
    <div className="top-nav">
      <nav>
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <h1 className="title">Avion</h1>
        <div className="right-icons">
          <div className="shopping-cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div className="user-avatar-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <hr className="divider"></hr>
        <ul className="main-links">
        <li className="list-item">Plant pots</li>
          <li className="list-item">About</li>
          <li className="list-item">Services</li>
          <li className="list-item">Contact</li>
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Services</li>
          <li className="list-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderSection;
