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
			selectedField: "X"
		};
	}
	handleChange(num, letter) {
		this.props.onUpdateSelect(this.state.compName, num, letter);
		const newSelectedField = `${num}${letter}`;
        this.setState({selectedField:newSelectedField});
        
	}
	toggleActive (val1,val2){
		const stringVal = val1+val2;
		if(this.state.selectedField === stringVal) {
			return "active";
		} else return "";
	}
	render() {
		const { settings } = this.props;
		const name = this.state.compName;
		return (
			<CompWrapper title="Life threatening complications" name={name} selectedValue={this.props.selectedValue} >
				{/* X */}
				{/* `${selectedField == "X" ? "active" : ""}` */}
				<div className={`${this.toggleActive("X", "")}`} onClick={(event) => this.handleChange("X", "")}>
					<button className={"btn btn-sm btn-block"}><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row">
					<div className={`${this.toggleActive(0,"")}`} onClick={(event) => this.handleChange(0, "")} ><CholeBtn {...settings} choleKey={`${name}0`}>None</CholeBtn></div>
				</div>
				{/* 1 */}
				<div className="chole-row"></div>
				{/* 2 */}
				<div className="chole-row">
                    <div className={`${this.toggleActive(2, "")}`} onClick={(event) => this.handleChange(2, "")}><CholeBtn {...settings} choleKey={`${name}2`}>Extracranial complication</CholeBtn></div>
				</div>
				{/* 3 */}
				<div className="chole-row"></div>
				{/* 4 */}
				<div className="chole-row">
                    <div className={`${this.toggleActive(4, "")}`} onClick={(event) => this.handleChange(4, "")}><CholeBtn {...settings} choleKey={`${name}4`} >Intraranial Complications</CholeBtn></div>
				</div>
			</CompWrapper>
		);
	}
}

export default CompLTC;
