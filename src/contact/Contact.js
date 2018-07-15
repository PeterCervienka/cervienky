import React from 'react';
import ContactBox from './ContactBox';

const Contact = () => (
	<div id="fh5co-contact" className="fh5co-bg">
		<div className="overlay"></div>
		<div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
          <span>V prípade akýchkoľvek otázok</span>
          <h2>nás neváhajte kontaktovať</h2>
        </div>
        <div className="row">
          <div className="col-md-offset-2 col-md-4 col-xs-12">
            <ContactBox
              img="peti.jpg"
              phone="0902 761 068"
              email="peter.cervienka@gmail.com"
            />
          </div>
          <div className="col-md-4 col-xs-12">
            <ContactBox
              img="leni.jpg"
              phone="0907 377 165"
              email="lenka.hohosova@gmail.com"
            />
          </div>
        </div>
      </div>
		</div>
	</div>
);

export default Contact;