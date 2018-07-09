import React from 'react';

const Event = () => (
    <div id="fh5co-event" className="fh5co-bg">
		<div className="overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<span>Náš špeciálny deň</span>
					<h2>Svadobné udalosti</h2>
				</div>
			</div>
			<div className="row">
				<div className="display-t">
					<div className="display-tc">
						<div className="col-md-10 col-md-offset-1">
							<div className="col-md-6 col-sm-6 text-center">
								<div className="event-wrap animate-box">
									<h3>Sobáš</h3>
									<div className="event-col">
										<i className="icon-clock"></i>
										<span>15:00</span>
										<span>16:00</span>
									</div>
									<div className="event-col">
										<i className="icon-calendar"></i>
										<span>Sobota 06</span>
										<span>Október 2018</span>
									</div>
									<p>Svoje ÁNO si povieme v piaristickom kostole Najsvätejšej trojice v Prievidzi</p>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 text-center">
								<div className="event-wrap animate-box">
									<h3>Párty</h3>
									<div className="event-col">
										<i className="icon-clock"></i>
										<span>16:30</span>
										<span>05:00</span>
									</div>
									<div className="event-col">
										<i className="icon-calendar"></i>
										<span>Sobota 06</span>
										<span>Október 2018</span>
									</div>
									<p>Po oficialnej časti sa všetci stretneme v reštaurácia Meridiana, kde sa riadne najeme a zatancujeme</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Event;