import React, { Component } from "react";
import CholeBtn from "../_shared/CholeBtn";
import CompWrapper from "../_shared/CompWrapper";


class CompLTC extends Component {
	constructor(props) {
		super(props);
		this.state = {
            compName: "L",
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
            <CompWrapper title="Life threatening complications" name={name}>
				{/* X */}
				<div>
                    <button className="btn btn-light btn-sm btn-block" onClick={() => this.handleChange("X", "")}><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row">
                    <div onClick={() => this.handleChange(0, "")}><CholeBtn {...settings} choleKey={`${name}0`}>None</CholeBtn></div>
				</div>
				{/* 1 */}
				<div className="chole-row"></div>
				{/* 2 */}
				<div className="chole-row">
                    <div onClick={() => this.handleChange(2, "")}><CholeBtn {...settings} choleKey={`${name}2`} active>Extracranial complication</CholeBtn></div>
				</div>
				{/* 3 */}
				<div className="chole-row"></div>
				{/* 4 */}
				<div className="chole-row row-double">
                    <div onClick={() => this.handleChange(4, "")}><CholeBtn {...settings} choleKey={`${name}4`} >Intraranial Complications</CholeBtn></div>
				</div>
			</CompWrapper>
		);
	}
}

export default CompLTC;
