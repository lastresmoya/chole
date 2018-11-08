import React from "react";
import FaIcon from "@fortawesome/react-fontawesome";
import { faToggleOn,faToggleOff } from "@fortawesome/fontawesome-free-solid";


function ModalSettings(props) {
    return (
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
                        Hints <FaIcon icon={faToggleOn} />
                        Resize Images <FaIcon icon={faToggleOff} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">OK</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalSettings;


