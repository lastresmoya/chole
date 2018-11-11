import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faExpand, faInfoCircle } from '@fortawesome/fontawesome-free-solid';


function CholeBtn(props) {
    const {hints,resizeImg,prevImg, choleKey} = props;
    const hintContent = `<div>
        <div>Middle ear with extension into the attic and mastoid</div>
        <div>+ supratubal space/Eustachian tube and/or sinus tympani</div>
    </div>`;
    // console.log(active);
	return (
		<div className="chole-btn-wrap">
            {/* <div className={`chole-btn ${active && "active"}`}> */}
            <div className="chole-btn">
				{/* Display Image if there's one */}
				{prevImg && <img src={prevImg}/>}
				{/* If there's no Prop Img diplay Children */}
				{!prevImg && <span>{props.children}</span>}
				<div className="btn-options">
                    {/* IF hints are active on Settings, display hint */}
                    {/* {hints && <button data-toggle="popover" title="Popover title" data-content="<small>wjvnwnvwe v e </small><div>wkjvwv</div>"><FaIcon icon={faInfoCircle} /></button>} */}

                    {hints && <button data-toggle="popover" data-content={hintContent}><FaIcon icon={faInfoCircle}/></button>}
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
                		<div className="modal-content border-0">
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
