import React from 'react';
import 'animate.css'; // Import animate.css for animations

const ServicesSection = () => {
    return (
        <section>
            <div className="str home-acces-main">
                <div className="container">
                    <div className="row">
                        {/* BACKGROUND SHAPE */}
                        <div className="wedd-shap">
                            <span className="abo-shap-1"></span>
                            <span className="abo-shap-4"></span>
                        </div>
                        {/* END BACKGROUND SHAPE */}

                        <div className="home-tit">
                            <p>Quick Access</p>
                            <h2>
                                <span>Our Services</span>
                            </h2>
                            <span className="leaf1"></span>
                            <span className="tit-ani-"></span>
                        </div>

                        <div className="home-acces">
                            <ul className="hom-qui-acc-sli">
                                {[
                                    { title: 'Browse Profiles', imgSrc: `${process.env.PUBLIC_URL}/matrimo/images/icon/user.png`, link: 'all-profiles.html', description: '1000+ Profiles' },
                                    { title: 'Wedding', imgSrc: `${process.env.PUBLIC_URL}/matrimo/images/icon/gate.png`, link: 'wedding-video.html', description: '100+ Profiles' },
                                    { title: 'All Services', imgSrc: `${process.env.PUBLIC_URL}/matrimo/images/icon/couple.png`, link: 'services.html', description: '1200+ Profiles' },
                                    { title: 'Join Now', imgSrc: `${process.env.PUBLIC_URL}/matrimo/images/icon/hall.png`, link: 'plans.html', description: 'Start for free' }

                                ].map((item, index) => (
                                    <li key={index}>
                                        <div
                                            className={`animate__animated animate__fadeInUp hacc hacc${index + 1}`}
                                            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                                        >
                                            <div className="con">
                                                <img src={item.imgSrc} alt={item.title} loading="lazy" />
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                                <a href={item.link}>View more</a>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
