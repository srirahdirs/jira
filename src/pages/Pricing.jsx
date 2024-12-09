import React from 'react'

const Pricing = () => {
    return (
        <>
            <section>
                <div className="plans-ban">
                    <div className="container">
                        <div className="row">
                            <span className="pri">Pricing Plans</span>
                            <h1>Choose Your Plan and Get Started</h1>
                            <p>Select the best plan that fits your needs. Enjoy great features at unbeatable prices.</p>
                            <span className="nocre">No credit card required</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="plans-main">
                    <div className="container">
                        <div className="row">
                            <ul>
                                <li>
                                    <div className="pri-box">
                                        <h2>Free</h2>
                                        <p>Perfect for exploring our platform with basic features.</p>
                                        <a href="sign-up.html" className="cta">Get Started</a>
                                        <span className="pri-cou"><b>&#8377;0</b>/mo</span>
                                        <ol>
                                            <li><i className="fa fa-close close" aria-hidden="true"></i> 5 Premium Profiles view /mo</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> Free user profile view</li>
                                            <li><i className="fa fa-close close" aria-hidden="true"></i> No contact details view</li>
                                            <li><i className="fa fa-close close" aria-hidden="true"></i> Can't send interest</li>
                                            <li><i className="fa fa-close close" aria-hidden="true"></i> No chat feature</li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <div className="pri-box pri-box-pop">
                                        <span className="pop-pln">Most Popular Plan</span>
                                        <h2>Gold</h2>
                                        <p>Get the best features with increased profile views and interaction.</p>
                                        <a href="sign-up.html" className="cta">Get Started</a>
                                        <span className="pri-cou"><b>&#8377;3490</b>/mo</span>
                                        <ol>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> 20 Premium Profiles view /mo</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> Free user profile view</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> View contact details</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> Send interest</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> Start chat</li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <div className="pri-box">
                                        <h2>Platinum</h2>
                                        <p>Our top-tier plan with the highest number of profile views and full access to features.</p>
                                        <a href="sign-up.html" className="cta">Get Started</a>
                                        <span className="pri-cou"><b>&#8377;5490</b>/mo</span>
                                        <ol>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> 50 Premium Profiles view /mo</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> Free user profile view</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> View contact details</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> Send interest</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> Start chat</li>
                                        </ol>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
