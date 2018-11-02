import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faExpand, faInfoCircle } from '@fortawesome/fontawesome-free-solid';


function CholeBtn(props) {
    const {hints,resizeImg,prevImg, choleKey, active} = props;
    console.log(active);
	return (
		<div className="chole-btn-wrap">
			<div className={`chole-btn ${active && "active"}`}>
				{/* Display Image if there's one */}
				{prevImg && <img src={prevImg}/>}
				{/* If there's no Prop Img diplay Children */}
				{!prevImg && <span>{props.children}</span>}
				<div className="btn-options">
					{/* IF hints are active on Settings, display hint */}
					{hints && <button><FaIcon icon={faInfoCircle}/></button>}
					{prevImg &&
                        <span>
                        	{resizeImg && <button data-toggle="modal" data-target={`#imageModal${choleKey}`}><FaIcon icon={faExpand}/></button>}
                        </span>
					}
				</div>
			</div>

			{/* If Settings Resize Image is ON make modal available */}
			{resizeImg &&
                <div className="modal fade" id={`imageModal${choleKey}`} tabIndex="-1" role="dialog" aria-labelledby={`imageModalLabel${choleKey}`} aria-hidden="true">
                	<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                		<div className="modal-content bg-transparent border-0">
                			<div className="modal-header border-0">
                				<button type="button" className="close chole-close" data-dismiss="modal" aria-label="Close">
                					<span aria-hidden="true">&times;</span>
                				</button>
                			</div>
                			<div className="modal-body">
                				<img src={prevImg} className="img-fluid"/>
                			</div>
                			{/* <div className="modal-footer">
                                <button type="button" className="btn btn-primary">OK</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </div> */}
                		</div>
                	</div>
                </div>
			}
		</div> 
	);
}

export default CholeBtn;
