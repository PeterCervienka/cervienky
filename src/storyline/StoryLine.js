import React from 'react';

const StoryLine = () => (
    <div id="fh5co-couple-story">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<span>Ľúbime sa</span>
					<h2>a toto je náš príbeh</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 col-md-offset-0">
					<ul className="timeline animate-box">
						<li className="animate-box">
							<div className="timeline-badge" style={{backgroundImage: 'url(images/first_contact_color.png)'}}></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Prvý kontakt</h3>
									<span className="date">6. Januára 2014</span>
								</div>
								<div className="timeline-body">
									<p>Prvý krát sa o sebe dozvedeli, keď ešte Lenka študovala cez Erasmus v Nemecku a Peťo sa presťahoval do Bratislavy.</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted animate-box">
							<div className="timeline-badge" style={{backgroundImage: 'url(images/date_color.png)'}}></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Prvé rande</h3>
									<span className="date">8. Februára 2014</span>
								</div>
								<div className="timeline-body">
									<p>Hneď po jej návrate využil Peťo situáciu a pozval Lenku na rande. Po nedlhom prehovárani súhlasila.</p>
								</div>
							</div>
						</li>
						<li className="animate-box">
							<div className="timeline-badge" style={{backgroundImage: 'url(images/house_color.png)'}}></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Spoločné bývanie</h3>
									<span className="date">1. Sepembra 2014</span>
								</div>
								<div className="timeline-body">
									<p>Hneď ako Lenka skončila vysokú školu sa k sebe nasťahovali. 
                                        Cesta k terajšiemu bytu nebola ľahká a spolu vystriedali 4 byty
                                    </p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted animate-box">
							<div className="timeline-badge" style={{backgroundImage: 'url(images/ring_color.png)'}}></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Požiadanie o ruku</h3>
									<span className="date">16. Február 2018</span>
								</div>
								<div className="timeline-body">
									<p>
										Požiadanie o ruku prebehlo počas ich spoločnej dovolenky v Thajsku.
										Už pred tým Peťo vedel, že to chce urobiť, ale netušil kedy a ako.
										Bolo to stresujúce, Lenka počas dovolenky skoro našla schovaný prsteň,
										ale nakoniec to dobre dopadlo a Lenka povedala to vytúžené ÁNO
									</p>
								</div>
							</div>
						</li>
						<li className="animate-box">
							<div className="timeline-badge" style={{backgroundImage: 'url(images/wedding_color.png)'}}></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Spoločné priezvisko</h3>
									<span className="date">6. Október 2018</span>
								</div>
								<div className="timeline-body">
									<p>Ale to nieje koniec príbehu. Práve naopak. Po vyše 4 nádherných rokoch sa konečne budeme volať rovnako a naša spoločná cesta pokračuje ďalej...</p>
								</div>
							</div>
						</li>
			    	</ul>
				</div>
			</div>
		</div>
	</div>
);

export default StoryLine;