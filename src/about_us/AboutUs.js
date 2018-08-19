import React from 'react';

const AboutUs = () => (
    <div id="fh5co-couple">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                    <h2>Ahojte!</h2>
                    <h3>6. Októbra 2018, Prievidza, Slovensko</h3>
                    <p>Pozývame vás osláviť s nami našu svadbu</p>
                </div>
            </div>
            <div className="couple-wrap animate-box">
                <div className="couple-half">
                    <div className="groom">
                        <img src="images/peti.jpg" alt="groom" className="img-responsive" />
                    </div>
                    <div className="desc-groom">
                        <h3>Peter Červienka</h3>
                    </div>
                </div>
                <p className="pulze-animation heart text-center"><i className="icon-heart2"></i></p>
                <div className="couple-half">
                    <div className="bride">
                        <img src="images/leni.jpg" alt="groom" className="img-responsive" />
                    </div>
                    <div className="desc-bride">
                        <h3>Lenka Hohošová</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutUs;