import React from "react";

function IdentifierCol(props) {
	return (
		<div className="px-2 text-muted h6 chole-identifier">
			
            {!props.mobile && <div className="chole-title-replace">&nbsp;</div>}
			{/* X */}
			<div className="py-1">X</div>
			{/* 0 */}
			<div className="chole-row d-flex align-items-center">0</div>
			{/* 1 */}
			<div className="chole-row d-flex align-items-center">1</div>
			{/* 2 */}
			<div className="chole-row d-flex align-items-center">2</div>
			{/* 3 */}
			<div className="chole-row d-flex align-items-center">3</div>
			{/* 4 */}
			<div className="chole-row d-flex align-items-center">4</div>
		</div>
	);
}

export default IdentifierCol;


