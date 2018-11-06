import React, { Component } from "react";
import CholeBtn from "../_shared/CholeBtn";
import CompWrapper from "../_shared/CompWrapper";

class CompETVMP extends Component {
	constructor(props) {
		super(props);
		this.state = {
			compName: "E",
			numberVal: "X",
			letterVal: "",
		};
	}
	handleChange(num, letter) {
		this.props.onUpdateSelect(this.state.compName, num, letter);
	}
	render() {
		const { settings } = this.props;
		const name = this.state.compName;
		return (
            <CompWrapper title="Eustachian tube ventilation and mastiod pneumatisation" name={name} selectedValue={this.props.selectedValue} >
				{/* X */}
				<div>
					<button className="btn btn-light btn-sm btn-block" onClick={() => this.handleChange("X", "")}><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row">
					<div onClick={() => this.handleChange(0, "")}><CholeBtn {...settings} choleKey={`${name}0`} active>Moderate to good pneumatization <strong>good ventilation</strong></CholeBtn></div>
				</div>
				{/* 1 */}
				<div className="chole-row">
					<div onClick={() => this.handleChange(1, "")}><CholeBtn {...settings} choleKey={`${name}1`}>Moderate to good pneumatization <strong>poor ventilation</strong></CholeBtn></div>
				</div>
				{/* 2 */}
				<div className="chole-row">
					<div onClick={() => this.handleChange(2, "")}><CholeBtn {...settings} choleKey={`${name}2`}>Sclerotic mastoid</CholeBtn></div>
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
