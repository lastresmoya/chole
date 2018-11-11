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
			selectedField: "X"
		};
	}
	handleChange(num, letter) {
		this.props.onUpdateSelect(this.state.compName, num, letter);
		const newSelectedField = `${num}${letter}`;
		this.setState({ selectedField: newSelectedField });

	}
	toggleActive(val1, val2) {
		const stringVal = val1 + val2;
		if (this.state.selectedField === stringVal) {
			return "active";
		} else return "";
	}
	render() {
		const { settings } = this.props;
		const name = this.state.compName;
		return (
			<CompWrapper title="Eustachian tube vent. & mastiod pneumatisation" name={name} selectedValue={this.props.selectedValue} breakP={settings.breakP}>
				{/* X */}
				<div className={`${this.toggleActive("X", "")}`} onClick={() => this.handleChange("X", "")}>
					<div className="chole-btn chole-btn-sm" ><small>Not Identifiable (Not specified)</small></div>
				</div>
				{/* 0 */}
				<div className="chole-row">
					<div className={`${this.toggleActive(0, "")}`} onClick={() => this.handleChange(0, "")}><CholeBtn {...settings} choleKey={`${name}0`} active>Moderate to good pneumatization <strong>good ventilation</strong></CholeBtn></div>
				</div>
				{/* 1 */}
				<div className="chole-row">
					<div className={`${this.toggleActive(1, "")}`} onClick={() => this.handleChange(1, "")}><CholeBtn {...settings} choleKey={`${name}1`}>Moderate to good pneumatization <strong>poor ventilation</strong></CholeBtn></div>
				</div>
				{/* 2 */}
				<div className="chole-row">
					<div className={`${this.toggleActive(2, "")}`} onClick={() => this.handleChange(2, "")}><CholeBtn {...settings} choleKey={`${name}2`}>Sclerotic mastoid</CholeBtn></div>
				</div>
				{/* 3 */}
				<div className={`chole-row d-none d-${settings.breakP}-block`}></div>
				{/* 4 */}
				<div className={`chole-row d-none d-${settings.breakP}-block`}></div>
			</CompWrapper>
		);
	}
}

export default CompETVMP;
