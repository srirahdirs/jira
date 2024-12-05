import React from "react";

const LeftMenu = () => {
    return (
        <div className="menu-pop menu-pop1">
            <span className="menu-pop-clo"><i className="fa fa-times" aria-hidden="true"></i></span>
            <div className="inn">
                <img src={`${process.env.PUBLIC_URL}/matrimo/images/weddingsoulmates_matrimony.png`} alt="" loading="lazy" className="logo-brand-only" />
                <p><strong>Pooluva Gounder Matrimony </strong> is rapidly becoming one of the leading Tamil matchmaking services.</p>
                <ul className="menu-pop-info">
                    {/* <li><a href="#!"><i className="fa fa-phone" aria-hidden="true"></i>+92 (8800) 68 - 8960</a></li> */}
                    {/* <li><a href="#!"><i className="fa fa-whatsapp" aria-hidden="true"></i>+92 (8800) 68 - 8960</a></li> */}
                    <li><a href="#!"><i className="fa fa-envelope-o" aria-hidden="true"></i>help@weddingsoulmates.com</a></li>
                    <li><a href="#!"><i className="fa fa-map-marker" aria-hidden="true"></i>Coimbatore, Tirupur</a></li>
                    <li><a href="#!"><i className="fa fa-map-marker" aria-hidden="true"></i>Erode, Salem</a></li>
                </ul>
                <div className="menu-pop-help">
                    {/* <h4>Support Team</h4> */}
                    {/* <div className="user-pro">
                        <img src={`${process.env.PUBLIC_URL}/matrimo/images/profiles/1.jpg`} alt="" loading="lazy" />
                    </div> */}
                    <div className="user-bio">
                        {/* <h5>Ashley emyy</h5> */}
                        {/* <span>Senior personal advisor</span> */}
                        <a href="#" className="btn btn-primary btn-sm">info@weddingsoulmates.com</a>
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
    );
};

export default LeftMenu;
