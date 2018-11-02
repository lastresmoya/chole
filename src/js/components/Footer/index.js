import React from "react";

function Footer({overallStage,chole}) {
	return (
		<footer>
			<div className="container d-flex justify-content-between">
				<div><strong>ChOLE CLassification</strong> {chole}</div>
				<div><strong>OverallStage</strong> {overallStage}</div>
			</div>
		</footer>
	);
}

export default Footer;
