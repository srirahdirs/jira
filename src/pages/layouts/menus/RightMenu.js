import React from "react";

const RightMenu = () => {
    return (
        <>
            <div className="menu-pop menu-pop2">
                <span className="menu-pop-clo"><i className="fa fa-times" aria-hidden="true"></i></span>
                <div className="inn">
                    <div className="menu-pop-help">
                        <h4>Support Team</h4>
                        <div className="user-pro">
                            <img src={`${process.env.PUBLIC_URL}/matrimo/images/profiles/1.jpg`} alt="" loading="lazy" />
                        </div>
                        <div className="user-bio">
                            <h5>Ashley emyy</h5>
                            <span>Senior personal advisor</span>
                            <a href="enquiry.html" className="btn btn-primary btn-sm">Ask your doubts</a>
                        </div>
                    </div>
                    <div className="menu-pop-soci">
                        <ul>
                            <li><a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mob-me-all mobile_menu">
                <div className="mob-me-clo"><img src={process.env.PUBLIC_URL + '/matrimo/images/icon/close.svg'} alt="" /></div>
                <div className="mv-bus">
                    <div className="menu-pop-help">
                        <h4>Support Team</h4>
                        <div className="user-pro">
                            <img src={`${process.env.PUBLIC_URL}/matrimo/images/profiles/1.jpg`} alt="" loading="lazy" />
                        </div>
                        <div className="user-bio">
                            <h5>Ashley emyy</h5>
                            <span>Senior personal advisor</span>
                            <a href="enquiry.html" className="btn btn-primary btn-sm">Ask your doubts</a>
                        </div>
                    </div>
                    <div className="menu-pop-soci">
                        <ul>
                            <li><a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            <li><a href="#!"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mob-me-all dashbord_menu">
                <div className="mob-me-clo"><img src={`${process.env.PUBLIC_URL}/matrimo/images/icon/close.svg`} alt="" /></div>
                <div className="mv-bus">
                    <div className="head-pro">
                        <img src={`${process.env.PUBLIC_URL}/matrimo/images/profiles/1.jpg`} alt="" loading="lazy" />
                        <b>user profile</b><br />
                        <h4>Ashley emyy</h4>
                    </div>
                    <ul>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="sign-up.html">Sign-up</a></li>
                        <li><a href="plans.html">Pricing plans</a></li>
                        <li><a href="all-profiles.html">Browse profiles</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RightMenu;
