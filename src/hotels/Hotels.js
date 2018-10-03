import React from 'react';
import HotelBox from "./HotelBox";

const Hotels = () => (
	<div id="fh5co-contact" className="fh5co-bg">
		<div className="overlay"></div>
		<div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
          <h2>V prípade, že máte ubytovanie</h2>
        </div>
        <HotelBox
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.220501970989!2d18.603188351606985!3d48.77768047917792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dceef8c8c219%3A0xed89dc9cf0076fe3!2sHotel+Hokejka!5e0!3m2!1sen!2ssk!4v1538572251934"
          name="Hotel Hokejka"
          street="Bojnická cesta 783/34"
          zip="971 01"
          city="Prievidza"
        />
        <HotelBox
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9325.04015020016!2d18.607027307531457!3d48.778796871174634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1d9a57ae175933f!2sPenzion+Teddy!5e0!3m2!1sen!2ssk!4v1538573437918"
          name="Penzión Teddy"
          street="Okrajová 965/14"
          zip="972 01"
          city="Bojnice"
        />
        <HotelBox
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10516.03817348512!2d18.58274533038987!3d48.781708058888384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dccd6d393cfd%3A0x7f1e4fdd8b7a1cb0!2sAccommodation+Bojnice+-+Pension+Hujer!5e0!3m2!1sen!2ssk!4v1538573829934"
          name="Penzión Hujer"
          street="Hviezdoslavova 135/15"
          zip="972 01"
          city="Bojnice"
        />
        <HotelBox
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.0964921987334!2d18.586128563035142!3d48.78004807918027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dcce36f1c6e1%3A0xbe3ec5a1787fb9ce!2sPrievidzsk%C3%A1+230%2F31%2C+972+01+Bojnice!5e0!3m2!1sen!2ssk!4v1538574297932"
          name="Ubytovanie Luky"
          street="Prievidzská 230/31"
          zip="972 01"
          city="Bojnice"
        />
      </div>
		</div>
	</div>
);

export default Hotels;