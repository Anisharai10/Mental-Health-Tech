import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>© 2023 Hospital Name. All rights reserved.</p>
      <div className="col-sm-6 text-right">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
          </div>
      <div className="social-icons">
        <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3A2021_Facebook_icon.svg&psig=AOvVaw0YxD1i9irSigFf3IwRjIPR&ust=1679823076464000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiphN_i9v0CFQAAAAAdAAAAABAE"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      </div>
    </div>
  );
}

export default Footer;
