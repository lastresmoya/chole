import React, { Component } from "react";
import CholeBtn from "../_shared/CholeBtn";
import CompWrapper from "../_shared/CompWrapper";

class CompETVMP extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberVal: "X",
			letterVal: "",
		};
	}
	render() {
		const { settings } = this.props;
		const name = "ETVMP";
		return (
            <CompWrapper title="Eustachian tube ventilation and mastiod pneumatisation" name={name}>
				{/* X */}
				<div>
                    <button className="btn btn-light btn-sm btn-block"><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row">
                    <CholeBtn {...settings} choleKey={`${name}0`} active>Moderate to good pneumatization <strong>good ventilation</strong></CholeBtn>
				</div>
				{/* 1 */}
                <div className="chole-row">
                    <CholeBtn {...settings} choleKey={`${name}1`}>Moderate to good pneumatization <strong>poor ventilation</strong></CholeBtn>
                </div>
				{/* 2 */}
				<div className="chole-row">
					<CholeBtn {...settings} choleKey={`${name}2`}>Sclerotic mastoid</CholeBtn>
				</div>
				{/* 3 */}
				<div className="chole-row"></div>
				{/* 4 */}
				<div className="chole-row"></div>
			</CompWrapper>
		);
	}
}

export default CompETVMP;
