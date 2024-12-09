import React from 'react'
import '../../assets/css/Footer.css';


const Footer = () => {
  return (
    <section className="wed-hom-footer">
      <div className="container">
        <div className="row foot-supp">
          <h2><span>Free support:</span> &nbsp;&nbsp; <span>Email:</span>
            info@weddingsoulmates.com</h2>
        </div>
        <div className="row wed-foot-link wed-foot-link-1">
          <div className="col-md-4">
            <h4>Get In Touch</h4>
            {/* <p>Address: 3812 Lena Lane City Jackson Mississippi</p> */}
            {/* <p>Phone: <a href="tel:+917904462944">+92 (8800) 68 - 8960</a></p> */}
            <p>Email: <a href="mailto:info@weddingsoulmates.com">info@weddingsoulmates.com</a></p>
          </div>
          <div className="col-md-4">
            <h4>HELP &amp; SUPPORT</h4>
            <ul>
              <li><a href="#">Wedding Soul Mates Matrimony</a>
              </li>
              <li><a href="#">Contact us</a>
              </li>
              <li><a href="#">Feedback</a>
              </li>
              <li><a href="#">FAQs</a>
              </li>
              <li><a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 fot-soc">
            <h4>SOCIAL MEDIA</h4>
            <ul>
              <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/matrimo/images/social/1.png`} alt="" loading="lazy" /></a></li>
              <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/matrimo/images/social/2.png`} alt="" loading="lazy" /></a></li>
              <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/matrimo/images/social/3.png`} alt="" loading="lazy" /></a></li>
              <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/matrimo/images/social/5.png`} alt="" loading="lazy" /></a></li>
            </ul>
          </div>
        </div>
        <div className="row foot-count">
          <p>Wedding Soul Mates Matrimony – Trusted by individuals across the globe for finding successful and lasting marriages. <a
            href="/register" className="btn btn-primary btn-sm">Join us today !</a></p>
        </div>
      </div>
    </section>
  )
}

export default Footer