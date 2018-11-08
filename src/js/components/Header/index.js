import React from "react";
import logo from "./assets/logo.png";
import ModalGeneral from "../_shared/ModalGeneral";
import ModalSettings from "../_shared/ModalSettings";
import FaIcon from "@fortawesome/react-fontawesome";
import { faCog, faInfoCircle } from "@fortawesome/fontawesome-free-solid";


function Header(props) {
	return (
		<header>
			<div className="container py-1">
				<div className="d-flex justify-content-between align-items-center">
                    <h1 className="h6 m-0 font-weight-strong mr-3">ChOLE - <small>Staging System for Cholesteatoma</small></h1>
					<div className="d-flex">
                        <button className="btn-link border-0" data-toggle="modal" data-target="#generalModal"><FaIcon icon={faInfoCircle} /></button>
						<button className="btn-link border-0" data-toggle="modal" data-target="#settingsModal"><FaIcon icon={faCog} /></button>
					</div>
				</div>
				<p className="d-none d-sm-block lh-sm m-0">
					<small className="text-muted">Calculate the ChOLE stage with this tool by walking through following steps. Select those items which fit to your patient and get an overall ChOLE stage as a result. Use the following shortcuts to quickly switch the single states: C, O, L, E (or A, S, D, F). With every change the new classification value is copied to the clipboard.</small>
				</p>
				
			</div>
            {/* <img src={logo} alt=""/> */}
            <ModalGeneral/>
			<ModalSettings/>
		</header>
	);
}

export default Header;
