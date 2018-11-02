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
			letterVal: "",
            
		};
	}
	render() {
		const {settings} = this.props;
		const name = "Ch";
		return (
			<div className="chole-section">
				<h5 className="chole-title text-primary">Extension</h5>
				{/* X */}
				<div>
                    <button className="btn btn-light btn-sm btn-block"><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row"></div>
				{/* 1 */}
				<div className="chole-row row-double">
					<CholeBtn {...settings} prevImg={Ch1a} choleKey={`${name}1a`} />
					<CholeBtn {...settings} prevImg={Ch1b} choleKey={`${name}1b`} />
				</div>
				{/* 2 */}
				<div className="chole-row row-double">
					<CholeBtn {...settings} prevImg={Ch2a} choleKey={`${name}2a`} active />
					<CholeBtn {...settings} prevImg={Ch2b} choleKey={`${name}2b`} />
				</div>
				{/* 3 */}
				<div className="chole-row">
					<CholeBtn {...settings} prevImg={Ch3} choleKey={`${name}3`}/>
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
