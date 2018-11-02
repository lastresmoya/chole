import React, {Component} from "react";
import CholeBtn from "../_shared/CholeBtn";
import Ch1a from "./assets/Ch1a.png";
import Ch1b from "./assets/Ch1b.png";
import Ch2a from "./assets/Ch2a.png";
import Ch2b from "./assets/Ch1b.png";
import Ch3 from "./assets/Ch3.png";


class CompE extends Component {
	constructor(props){
		super(props);
		this.state = {
			numberVal: "X",
			letterVal: ""
		};
	}
	onValueChange () {

	}
	render() {
		const {settings} = this.props;
		return (
			<div className="chole-section">
				<h5 className="text-primary text-sm-center">Extension</h5>
				{/* X */}
				<div>
					<button className="btn btn-light btn-sm btn-block">Not Identifiable (Not specified)</button>
				</div>
				{/* 0 */}
				<div className="chole-row"></div>
				{/* 1 */}
				<div className="chole-row row-double">
					<CholeBtn {...settings} prevImg={Ch1a} choleKey={"Ch1a"}/>
					<CholeBtn {...settings} prevImg={Ch1b} choleKey={"Ch1b"}/>
				</div>
				{/* 2 */}
				<div className="chole-row row-double">
					<CholeBtn {...settings} prevImg={Ch2a} choleKey={"Ch2a"}/>
					<CholeBtn {...settings} prevImg={Ch2b} choleKey={"Ch2b"}/>
				</div>
				{/* 3 */}
				<div className="chole-row">
					<CholeBtn {...settings} prevImg={Ch3} choleKey={"Ch3"}/>
				</div>
				{/* 4 */}
				<div className="chole-row row-double">
					<CholeBtn {...settings}>
                    a) Supra- or infralabyrinthine extension of tympanomastoid cholesteatoma
					</CholeBtn>
					<CholeBtn {...settings}>
                    b) Petrous apex cholesteatoma
					</CholeBtn>
				</div>
			</div>
		);
	}
}

export default CompE;
