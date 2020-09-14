import React from 'react';
import cart from '../assets/cart-outline.svg';


function Navbar() {
    return (

            <header>
                <nav>
                    <h2>Shop</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Cart</a></li>
                        <img src={cart} alt="cartimg" className="cart_img"/>
                        <span>0</span>
                    </ul>
                </nav>
            </header>



    );
}

export default Navbar;