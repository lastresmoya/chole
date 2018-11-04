import React, { Component } from "react";
import CholeBtn from "../_shared/CholeBtn";
import CompWrapper from "../_shared/CompWrapper";


class CompLTC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberVal: "X",
			letterVal: "",
		};
	}
	render() {
		const { settings } = this.props;
		const name = "LTC";
		return (
            <CompWrapper title="Life threatening complications" name={name}>
				{/* X */}
				<div>
                    <button className="btn btn-light btn-sm btn-block"><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row">
					<CholeBtn {...settings} choleKey={`${name}0`}>None</CholeBtn>
				</div>
				{/* 1 */}
				<div className="chole-row"></div>
				{/* 2 */}
				<div className="chole-row">
					<CholeBtn {...settings} choleKey={`${name}2`} active>Extracranial complication</CholeBtn>
				</div>
				{/* 3 */}
				<div className="chole-row"></div>
				{/* 4 */}
				<div className="chole-row row-double">
					<CholeBtn {...settings} choleKey={`${name}4`} >Intraranial Complications</CholeBtn>
				</div>
			</CompWrapper>
		);
	}
}

export default CompLTC;
