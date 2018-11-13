import React, {Component} from "react";
import logo from "./assets/logo-chole.png";
// import ModalGeneral from "../_shared/ModalGeneral";
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
					<div className="d-flex justify-content-start align-items-center">
                        <div><img src={logo} alt="" /></div>
                        <div className="col-8 d-none d-sm-block ">
                            <p className="px-4 m-0 text-muted font-weight-light">
                                This tool calculates the ChOLE stage. Simply choose an option per category and the overall ChOLE tage is displayed in the footer area. Find out more information here.
                            </p>
                        </div>
						<div className="d-flex ml-auto">
							{/* <button className="btn-link border-0" data-toggle="modal" data-target="#generalModal"><FaIcon icon={faInfoCircle} /></button> */}
							<button className="btn-link border-0" data-toggle="modal" data-target="#settingsModal"><FaIcon icon={faCog} /></button>
						</div>
					</div>
					

				</div>
				
				{/* <ModalGeneral /> */}
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
