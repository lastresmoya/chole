import React from "react";

function Footer({overallStage,chole}) {
	return (
		<footer>
			<div className="container">
				<div>ChOLE CLassification: {chole}</div>
				<div>OverallStage: {overallStage}</div>
			</div>
		</footer>
	);
}

export default Footer;
