import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MetaData from '../../layout/MetaData';
import {getProduct} from '../../actions/productAction'
import {useSelector, useDispatch} from 'react-redux'

function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct());
    },[dispatch])

    return (
        <Fragment>
            <MetaData title={"Oestin Store | Home"} />
            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>on all products</h1>
                <p>Save more with coupons &amp; up to 70% off!</p>
                <button>
                    <a 
                        onClick={()=>{
                            navigate("/shop")
                        }}
                    >
                        Shop Now
                    </a>
                </button>
            </section>
            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="img/features/f1.png" alt="product image" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src="img/features/f2.png " alt="product image" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src="img/features/f3.png" alt="product image" />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src="img/features/f4.png" alt="product image" />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src="img/features/f5.png" alt="product image" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src="img/features/f1.png" alt= "product image" />
                    <h6>F24/7 Support</h6>
                </div>
            </section>
            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="./../img/products/f1.jpg" alt= "image" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#" className="fal fa-bag-shopping cart" />
                    </div>
                    <div className="pro">
                        <img src="img/products/f2.jpg" alt="image" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#" className="fal fa-bag-shopping cart" />
                    </div>
                    <div className="pro">
                        <img src="img/products/f3.jpg" alt="image" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#" className="fal fa-bag-shopping cart " />
                    </div>
                    <div className="pro">
                        <img src="img/products/f4.jpg" alt="image" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#" className="fal fa-bag-shopping cart" />
                    </div>
                    <div className="pro">
                        <img src="img/products/f5.jpg" alt="image" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#" className="fal fa-bag-shopping cart" />
                    </div>
                    <div className="pro">
                        <img src="img/products/f6.jpg" alt="image" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#" className="fal fa-bag-shopping cart" />
                    </div>
                    <div className="pro">
                        <img src="img/products/f7.jpg" alt="image" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#" className="fal fa-bag-shopping cart" />
                    </div>
                    <div className="pro">
                        <img src="img/products/f8.jpg" alt="image" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#" className="fal fa-bag-shopping cart" />
                    </div>
                </div>
            </section>
            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% off </span> - All t-Shirts &amp; Accessories </h2>
                <button className="normal">Explore More</button>
            </section>
            `
            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 Free</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcoming seasons</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className="white">Collection</button>
                </div>
            </section>
            <section id="banner3">
                <div className="banner-box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring / Summer 2022</h3>
                </div>
                <div className="banner-box banner-box3   ">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>
            </section>
            <section id="newsletter" className="section-p1">
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our shop and <span>special offers.</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email address" />
                    <button className="normal">Sign Up</button>
                </div>
            </section>
        </Fragment>
    )
}

export default Home