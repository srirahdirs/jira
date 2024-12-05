import React from "react";
import { useAuth } from '../../../context/AuthContext';

const TopMenu = () => {

    const { isLoggedIn } = useAuth();
    return (
        <div className="head-top">
            <div className="container">
                <div className="row">
                    <div className="lhs">
                        <ul>
                            <li><a href="#!" className="ser-open" aria-label="Search"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="rhs">
                        <ul>
                            {/* <li><a href="tel:+9704462944"><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+01 5312 5312</a></li> */}
                            <li><a href="mailto:info@weddingsoulmates.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp; help@weddingsoulmates.com</a></li>
                            <li><a href="#!" aria-label="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#!" aria-label="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#!" aria-label="whatsapp"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                            {isLoggedIn ? (
                                <li>
                                    <a href="/logout">
                                        <i className="fa fa-sign-out" aria-hidden="true" style={{ color: 'white' }}></i> Logout
                                    </a>
                                </li>
                            ) : null}


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;
