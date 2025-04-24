import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
    return(
        <header>
            <nav>


                <div className="navbar-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <ul className="list-unstyled list-inline header-contact">
                                <li> <i className="fa fa-phone"></i> <a href="tel:+256789323490">+256789323490 </a> </li>
                                <li> <i className="fa fa-envelope"></i> <a href="mailto:contact@sadaka.org">tihabwangyej@gmail.com</a> </li>
                                </ul> {/* /.header-contact */}
                            </div>
                            <div className="col-sm-6 col-xs-12 text-right">
                                <ul className="list-unstyled list-inline header-social">
                                <li> <a href="https://www.facebook.com/Joshua.T.Walker"> <i className="fa fa-facebook"></i> </a> </li>
                                <li> <a href="https://twitter.com/@TihabwangyeJ"> <i className="fa fa-twitter"></i>  </a> </li>
                                <li> <a href="https://wa.me/+256789323490"> <i className="fa fa-whatsapp"></i> </a> </li>
                                <li> <a href="https://www.instagram.com/Joshua T Walker"> <i className="fa fa-instagram"></i> </a> </li>
                                <li> <a href="https://www.linkedin.com/in/your-linkedin-profile-url"> <i className="fa fa fa-linkedin"></i> </a> </li>
                                </ul> {/* /.header-social */}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="navbar-main">
                    <div className="container">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>


                        <div id="navbar" className="navbar-collapse collapse pull-right">
                        <ul className="nav navbar-nav">
                            <li><Link to="/" className="is-active">HOME</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li className="has-child">
                            <Link to="/causes">CAUSES</Link>
                            <ul className="submenu">
                                <li className="submenu-item"><Link to="/causes">Causes list </Link></li>
                                <li className="submenu-item"><Link to="/causes/single">Single cause </Link></li>
                                <li className="submenu-item"><Link to="/causes/single">Single cause </Link></li>
                                <li className="submenu-item"><Link to="/causes/single">Single cause </Link></li>
                            </ul>
                            </li>
                            <li><Link to="/gallery">GALLERY</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                        </div> {/* /#navbar */}
                    </div> {/* /.container */}
                </div> {/* /.navbar-main */}
            
            </nav>
        </header>
    );
}
export default Navbar