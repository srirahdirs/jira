import React from 'react'
import '../../assets/css/Footer.css';


const Footer = () => {
    const name = 'YZT'
  return (
    <footer className="footer-bar">
            <div className="footer-content">
                © 2024 {name}. All rights reserved.
            </div>
    </footer>
  )
}

export default Footer