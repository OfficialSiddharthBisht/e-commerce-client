import React from 'react'

function Home() {
    return (
        <div>
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
            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>on all products</h1>
                <p>Save more with coupons &amp; up to 70% off!</p>
                <button><a href="shop.html">Shop Now</a></button>
            </section>
            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="../../img/features/f1.png" alt />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src="../../img/features/f2.png " alt />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src="../../img/features/f3.png" alt />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src="../../img/features/f4.png" alt />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src="../../img/features/f5.png" alt />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src="../../img/features/f1.png" alt />
                    <h6>F24/7 Support</h6>
                </div>
            </section>
            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container" onclick="window.location.href='sproduct.html';">
                    <div className="pro">
                        <img src="img/products/f1.jpg" alt />
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
                        <img src="img/products/f2.jpg" alt />
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
                        <img src="img/products/f3.jpg" alt />
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
                        <img src="img/products/f4.jpg" alt />
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
                        <img src="img/products/f5.jpg" alt />
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
                        <img src="img/products/f6.jpg" alt />
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
                        <img src="img/products/f7.jpg" alt />
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
                        <img src="img/products/f8.jpg" alt />
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
            <footer className="section-p1">
                <div className="col">
                    <img className="logo" src="img/logo.png" alt />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> 562 wellington Road, Street 32, San Fransisco</p>
                    <p><strong>Phone:</strong>+01 2222 365 / (+91) 01 2345 679</p>
                    <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat </p>
                    <div className="follow">
                        <h4>Follow us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f" />
                            <i className="fab fa-twitter" />
                            <i className="fab fa-instagram" />
                            <i className="fab fa-pinterest-p" />
                            <i className="fab fa-youtube" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms &amp; Conditions</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>
                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="row">
                        <img src="img/pay/app.jpg" alt />
                        <img src="img/pay/play.jpg" alt />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src="img/pay/pay.png " alt />
                </div>
                <div className="copyright">
                    <p>0 2021, Tech2 etc - HTML CSS Ecommerce Template</p>
                </div>
            </footer>
        </div>
    )
}

export default Home