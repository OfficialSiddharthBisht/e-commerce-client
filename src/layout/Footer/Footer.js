import React from 'react'

function Footer() {
    return (
        <footer className="section-p1">
                <div className="col">
                    <img className="logo" src="img/logo.svg" alt= "oestin store" />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> Oestin, Mallital Nainital, Uttrakhand ,India</p>
                    <p><strong>Phone:</strong> (+91) 8077 30 5268</p>
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
                        <img src="img/pay/app.jpg" alt="image" />
                        <img src="img/pay/play.jpg" alt="image" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src="img/pay/pay.png " alt="image" />
                </div>
                <div className="copyright">
                    <p>2022 @Siddharth Bisht</p>
                </div>
            </footer>
    )
}

export default Footer