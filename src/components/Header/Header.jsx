import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Choose from a deverse menu featuring a delectable array of dishes crafted with the finest ingredients and culnary expertise. Our mission is to satify your cravings and elevate your dining experiene, one delicious meal at a time.
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
}

export default Header
