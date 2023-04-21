import React from 'react'

function Header() {
    return (
        <section id="header">
                <a href="#"> <img src="img/logo.png" className="logo" alt /></a>
                <div>
                    <ul id="navbar">
                        <li><a className="active " href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="login.html">Login / Sign Up</a></li>
                        <li><a href="cart.html"><i className="fa-solid fa-bag-shopping" style={{ color: '#333c39' }} /></a></li>
                        <a href="#" id="close"><i className="far fa-times" /></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="cart.html"><i className="fa-thin fa-bag-shopping" /></a>
                    <span id="bar"> <i className="fas fa-outdent" /></span>
                </div>
            </section>
    )
}

export default Header