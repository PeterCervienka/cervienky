import React from 'react';
import Address from "../map/Address";

const IFRAME_WIDTH = 600;
const IFRAME_HEIGHT = 350;
const ADDRESS_MARGIN_TOP = 80;

const HotelBox = ({src, name, street, zip, city}) => (
  <div className="animate-box text-center map-box">
    <div className="row">
      <div className="col-md-9 col-xs-12">
        <iframe
          title="restaurant_google_map"
          src={src}
          width={IFRAME_WIDTH}
          height={IFRAME_HEIGHT}
          frameBorder="0"
          style={{border:0}}
          allowFullScreen>
        </iframe>
      </div>
      <div className="col-md-3 col-xs-12">
        <Address
          name={name}
          street={street}
          zip={zip}
          city={city}
          cssMargin={{'top': ADDRESS_MARGIN_TOP}}
        />
      </div>
    </div>
  </div>
);

export default HotelBox;