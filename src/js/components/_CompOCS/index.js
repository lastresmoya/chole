import React, { Component } from "react";
import CholeBtn from "../_shared/CholeBtn";
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
			numberVal: "X",
			letterVal: "",
		};
	}
	render() {
		const { settings } = this.props;
		const name = "O";
		return (
			<div className="chole-section">
                <h5 className="text-success chole-title">Ossicular chain status <small>(at end of surgery)</small></h5>
				{/* X */}
				<div>
                    <button className="btn btn-light btn-sm btn-block"><small>Not Identifiable (Not specified)</small></button>
				</div>
				{/* 0 */}
				<div className="chole-row">
                    <CholeBtn {...settings} prevImg={O0} choleKey={`${name}0`} active/>
                </div>
				{/* 1 */}
				<div className="chole-row row-double">
					<CholeBtn {...settings} prevImg={O1} choleKey={`${name}1`} />
				</div>
				{/* 2 */}
				<div className="chole-row">
					<CholeBtn {...settings} prevImg={O2} choleKey={`${name}2`}  />
				</div>
				{/* 3 */}
				<div className="chole-row row-double">
                    <CholeBtn {...settings} prevImg={O3a} choleKey={`${name}3a`} />
                    <CholeBtn {...settings} prevImg={O3b} choleKey={`${name}3b`} />
				</div>
				{/* 4 */}
                <div className="chole-row row-double">
                    <CholeBtn {...settings} prevImg={O4a} choleKey={`${name}4a`} />
                    <CholeBtn {...settings} prevImg={O4b} choleKey={`${name}4b`} />
                </div>
			</div>
		);
	}
}

export default CompOCS;
