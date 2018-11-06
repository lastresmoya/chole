import React, {Component} from "react";
import CholeBtn from "../_shared/CholeBtn";
import CompWrapper from "../_shared/CompWrapper";
import Ch1a from "./assets/Ch1a.png";
import Ch1b from "./assets/Ch1b.png";
import Ch2a from "./assets/Ch2a.png";
import Ch2b from "./assets/Ch1b.png";
import Ch3 from "./assets/Ch3.png";


class CompE extends Component {
	constructor(props){
		super(props);
		this.state = {
			compName: "Ch",
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
        // console.log(stringVal, this.state.selectedField);
        if (this.state.selectedField === stringVal) {
            return "active";
        } else return "";
    }
	render() {
		const {settings} = this.props;
        const name = this.state.compName;
    	return (
    		<CompWrapper title="Extension" name={name} selectedValue={this.props.selectedValue} >
				{/* X */}
                <div className={`${this.toggleActive("X", "")}`} onClick={() => this.handleChange("X", "")}>
					<button className="btn btn-sm btn-block"><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row"></div>
				{/* 1 */}
				<div className="chole-row row-double">
					<div className={`${this.toggleActive(1, "a")}`} onClick={() => this.handleChange(1,"a")}><CholeBtn {...settings} prevImg={Ch1a} choleKey={`${name}1a`} /></div>
					<div className={`${this.toggleActive(1, "b")}`} onClick={() => this.handleChange(1,"b")}><CholeBtn {...settings} prevImg={Ch1b} choleKey={`${name}1b`}  /></div>
				</div>
				{/* 2 */}
				<div className="chole-row row-double">
					<div className={`${this.toggleActive(2, "a")}`} onClick={() => this.handleChange(2, "a")}><CholeBtn  {...settings} prevImg={Ch2a} choleKey={`${name}2a`}/></div>
					<div className={`${this.toggleActive(2, "b")}`} onClick={() => this.handleChange(2, "b")}><CholeBtn  {...settings} prevImg={Ch2b} choleKey={`${name}2b`} /></div>
				</div>
				{/* 3 */}
				<div className="chole-row">
                    <div className={`${this.toggleActive(3, "")}`} onClick={() => this.handleChange(3, "")}><CholeBtn  {...settings} prevImg={Ch3} choleKey={`${name}3`} /></div>
				</div>
				{/* 4 */}
				<div className="chole-row row-double">
                    <div className={`${this.toggleActive(4, "a")}`} onClick={() => this.handleChange(4, "a")}>
						<CholeBtn  {...settings}>
                            a) Supra- or infralabyrinthine extension of tympanomastoid cholesteatoma
						</CholeBtn>
					</div>
                    <div className={`${this.toggleActive(4, "b")}`} onClick={() => this.handleChange(4, "b")} >
						<CholeBtn {...settings}>
                            b) Petrous apex cholesteatoma
						</CholeBtn>
					</div>
				</div>
				
    		</CompWrapper>
    	);
	}
}

export default CompE;
