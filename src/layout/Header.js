import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate();

    return (
        <section id="header">
                <a 
                onClick={()=>{
                    navigate("/")
                }}
                > <img src="img/logo.png" className="logo" alt /></a>
                <div>
                    <ul id="navbar">
                        <li>
                            <a 
                        onClick={()=>{
                            navigate("/")
                        }}
                        >
                            Home
                            </a>
                        </li>
                        <li>
                            <a 
                            onClick={()=>{
                                navigate("/shop")
                            }}
                            >Shop</a>
                        </li>
                        <li>
                            <a 
                            onClick={()=>{
                                navigate("/")
                            }}
                            >About</a>
                        </li>
                        <li>
                            <a
                            onClick={()=>{
                                navigate("/login")
                            }}
                            >Login</a>
                        </li>
                        <li>
                            <a 
                            onClick={()=>{
                                navigate("/signup")
                            }}
                            >Sign Up</a>
                        </li>
                        <li>
                            <a href="cart.html">
                                <i className="fa-solid fa-bag-shopping" style={{ color: '#333c39' }} />
                            </a>
                        </li>
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