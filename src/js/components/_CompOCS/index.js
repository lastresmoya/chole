import React, { Component } from "react";
import CholeBtn from "../_shared/CholeBtn";
import CompWrapper from "../_shared/CompWrapper";

import O0 from "./assets/O0.png";
import O1 from "./assets/O1.png";
import O2 from "./assets/O2.png";
import O3a from "./assets/O3a.png";
import O3b from "./assets/O3b.png";
import O4a from "./assets/O4a.png";
import O4b from "./assets/O4b.png";


class CompOCS extends Component {
	constructor(props) {
		super(props);
		this.state = {
			compName: "O",
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
			<CompWrapper title="Ossicular chain status (at end of surgery)" name={name} selectedValue={this.props.selectedValue} >
				{/* X */}
                <div className={`${this.toggleActive("X", "")}`} onClick={() => this.handleChange("X", "")}>
					<button className="btn btn-sm btn-block" ><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row">
                    <div className={`${this.toggleActive(0, "")}`} onClick={() => this.handleChange(0, "")}><CholeBtn {...settings} prevImg={O0} choleKey={`${name}0`} active /></div>
				</div>
				{/* 1 */}
				<div className="chole-row">
                    <div className={`${this.toggleActive(1, "")}`} onClick={() => this.handleChange(1, "")}><CholeBtn {...settings} prevImg={O1} choleKey={`${name}1`} /></div>
				</div>
				{/* 2 */}
				<div className="chole-row">
                    <div className={`${this.toggleActive(2, "")}`} onClick={() => this.handleChange(2, "")}><CholeBtn {...settings} prevImg={O2} choleKey={`${name}2`} /></div>
				</div>
				{/* 3 */}
				<div className="chole-row row-double">
					<div className={`${this.toggleActive(3,"a")}`} onClick={() => this.handleChange(3, "a")}><CholeBtn {...settings} prevImg={O3a} choleKey={`${name}3a`} /></div>
					<div className={`${this.toggleActive(3,"b")}`} onClick={() => this.handleChange(3, "b")}><CholeBtn {...settings} prevImg={O3b} choleKey={`${name}3b`} /></div>
				</div>
				{/* 4 */}
				<div className="chole-row row-double">
					<div className={`${this.toggleActive(4,"a")}`} onClick={() => this.handleChange(4, "a")}><CholeBtn {...settings} prevImg={O4a} choleKey={`${name}4a`} /></div>
					<div className={`${this.toggleActive(4,"b")}`} onClick={() => this.handleChange(4, "b")}><CholeBtn {...settings} prevImg={O4b} choleKey={`${name}4b`} /></div>
				</div>
			</CompWrapper>
		);
	}
}

export default CompOCS;
