import React from 'react';

const ContactBox = ({img, phone, email}) => (
  <div className="contact-box">
    <img src={`images/${img}`} className="img-rounded img-responsive" alt="groom" />
    <p>{phone}</p>
    <p>{email}</p>
  </div>
);

export default ContactBox;