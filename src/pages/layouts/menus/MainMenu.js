import React from "react";
import TopMenu from './TopMenu';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { useAuth } from '../../../context/AuthContext';
const MainMenu = () => {
    const { isLoggedIn, user } = useAuth();
    return (
        <>
            <TopMenu />
            <LeftMenu />
            <RightMenu />
            <div className="hom-top">
                <div className="container">
                    <div className="row">
                        <div className="hom-nav">
                            {/* LOGO */}
                            <div className="logo">
                                {/* <span className="menu desk-menu">
                                    <i></i><i></i><i></i>
                                </span> */}
                                <a href="/home" className="logo-brand">
                                    <img src={`${process.env.PUBLIC_URL}/matrimo/images/WeddingSoulMates.png`} alt="" loading="lazy" className="ic-logo" />
                                </a>
                            </div>

                            {/* EXPLORE MENU */}

                            <div className="bl">
                                {isLoggedIn ? '' : (
                                    <ul>
                                        <li><a href="/login">Login</a></li>
                                        <li><a href="/register">Register</a></li>
                                    </ul>
                                )
                                }
                            </div>


                            {/* USER PROFILE */}
                            {isLoggedIn ? (
                                <div className="al">
                                    <div className="head-pro">
                                        {user.image ? (
                                            <img src={`${process.env.PUBLIC_URL}/matrimo/images/profiles/1.jpg`} alt="" loading="lazy" />
                                        ) : (<img src={`${process.env.PUBLIC_URL}/matrimo/images/user_dummy.png`} alt="" loading="lazy" />)
                                        }

                                        <b>My Profile</b><br />
                                        <h4>{user.name}</h4>
                                        <span className="fclick"></span>
                                    </div>
                                </div>
                            ) : ''}
                            {/* MOBILE MENU */}
                            <div className="mob-menu">
                                <div className="mob-me-ic">
                                    <span className="ser-open mobile-ser">
                                        <img src={`${process.env.PUBLIC_URL}/matrimo/images/icon/search.svg`} alt="" />
                                    </span>
                                    <span className="mobile-exprt" data-mob="dashbord">
                                        <img src={`${process.env.PUBLIC_URL}/matrimo/images/icon/users.svg`} alt="" />
                                    </span>
                                    <span className="mobile-menu" data-mob="mobile">
                                        <img src={`${process.env.PUBLIC_URL}/matrimo/images/icon/menu.svg`} alt="" />
                                    </span>
                                </div>
                            </div>
                            {/* END MOBILE MENU */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainMenu;