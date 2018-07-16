import React from 'react';
import Address from "./Address";


const IFRAME_WIDTH = 600;
const IFRAME_HEIGHT = 350;
const ADDRESS_MARGIN_TOP = 80;

const Map = () => (
    <div id="fh5co-map">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <h2>Ako sa k nám dostanete</h2>
          </div>
        </div>
        <div className="animate-box text-center map-box">
          <h3>Kostol</h3>
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <iframe
                title="church_google_map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.4785741359574!2d18.61908101567141!3d48.772753079279234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dcf1afc968e3%3A0x9e7df9a31207c419!2sPiaristick%C3%BD+kostol+Najsv%C3%A4tej%C5%A1ej+Trojice+a+nanebovzatia+Panny+M%C3%A1rie!5e0!3m2!1sen!2ssk!4v1531672520417"
                width={IFRAME_WIDTH}
                height={IFRAME_HEIGHT}
                frameBorder="0"
                style={{border:0}}
                allowFullScreen>
              </iframe>
            </div>
            <div className="col-md-3 col-xs-12">
              <Address
                name="Piaristický kostol Najsvätejšej Trojice"
                street="Námestie piaristov 1"
                zip="971 01"
                city="Prievidza"
                cssMargin={{'top': ADDRESS_MARGIN_TOP}}
              />
            </div>
          </div>
        </div>
        <div className="animate-box text-center map-box">
          <h3>Reštaurácia</h3>
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <iframe
                title="restaurant_google_map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.2085862075264!2d18.597358951613103!3d48.777907979178046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dcc3676c6583%3A0x26bbc402ca09ec10!2sMeridiana+Bojnice!5e0!3m2!1sen!2ssk!4v1531673166066"
                width={IFRAME_WIDTH}
                height={IFRAME_HEIGHT}
                frameBorder="0"
                style={{border:0}}
                allowFullScreen>
              </iframe>
            </div>
            <div className="col-md-3 col-xs-12">
              <Address
                name="Meridiana Bojnice"
                street="Prievidzská 1241/55"
                zip="972 01"
                city="Bojnice"
                cssMargin={{'top': ADDRESS_MARGIN_TOP}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Map;