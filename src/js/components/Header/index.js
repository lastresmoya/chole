import React from "react";
import logo from "./assets/logo.png";
import FaIcon from "@fortawesome/react-fontawesome";
import { faCog, faInfoCircle, faToggleOff } from "@fortawesome/fontawesome-free-solid";


function Header(props) {
	return (
		<header>
			<div className="container py-1">
				<div className="d-flex justify-content-between align-items-center">
					<h1 className="h6 m-0 font-weight-normal">ChOLE - Staging System for Cholesteatoma</h1>
					<div className="d-flex">
						<button className="btn btn-link"><FaIcon icon={faInfoCircle} /></button>
						<button type="button" className="btn btn-link" data-toggle="modal" data-target="#settingsModal"><FaIcon icon={faCog} /></button>
					</div>
				</div>
				<p className="d-none d-sm-block lh-sm m-0">
					<small className="text-muted">Calculate the ChOLE stage with this tool by walking through following steps. Select those items which fit to your patient and get an overall ChOLE stage as a result. Use the following shortcuts to quickly switch the single states: C, O, L, E (or A, S, D, F). With every change the new classification value is copied to the clipboard.</small>
				</p>
				
			</div>
			{/* <img src={logo} alt=""/> */}
			{/* Settings Modal */}
			<div className="modal fade" id="settingsModal" tabIndex="-1" role="dialog" aria-labelledby="settingsModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="settingsModalLabel">ChOLE Settings</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							Hints <FaIcon icon={faToggleOff}/>
							Resize Images <FaIcon icon={faToggleOff}/>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">OK</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
