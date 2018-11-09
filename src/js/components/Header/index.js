import React, {Component} from "react";
import logo from "./assets/logo.png";
import ModalGeneral from "../_shared/ModalGeneral";
import FaIcon from "@fortawesome/react-fontawesome";
import { faCog, faInfoCircle, faToggleOn, faToggleOff } from "@fortawesome/fontawesome-free-solid";


class Header extends Component {
    constructor(props){
        super(props);

    }
    toggleSetting(setting){
        this.props.onUpdateSetting(setting);
    }
	render(){
        const {hints,resizeImg} = this.props.settings;
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
				<ModalGeneral />
				{/* Modal Settings */}
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
                                <div className="d-flex justify-content-between align-items-center">
                                    <label>Hints</label>
                                    <button className="btn btn-light btn-lg " onClick={() => this.toggleSetting("hints")}>
                                        {hints && <span className="text-primary"><FaIcon icon={faToggleOn} /></span>      }
                                        {!hints && <span className="text-muted"><FaIcon icon={faToggleOff} /></span>}
                                    </button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label>Resize Images</label>
                                    <button className="btn btn-light btn-lg " onClick={() => this.toggleSetting("resizeImg")}>
                                        {resizeImg && <span className="text-primary"><FaIcon icon={faToggleOn} /></span>}
                                        {!resizeImg && <span className="text-muted"><FaIcon icon={faToggleOff} /></span>}
                                    </button>
                                </div>
							</div>
							<div className="modal-footer">
                                <button type="button" className="btn btn-primary px-5" data-dismiss="modal">OK</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
