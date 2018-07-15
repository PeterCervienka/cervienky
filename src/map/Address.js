import React from 'react';

const Address = ({name, street, zip, city, cssMargin}) => (
    <div style={{marginTop: cssMargin.top + 'px'}}>
      <h4>{name}</h4>
      <p>{street}</p>
      <p>{zip}</p>
      <p>{city}</p>
    </div>
);

export default Address;