import React, {Component} from "react";

class Footer extends Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	overallStage: "Overall stage cannot be calculated",
		// };
	}
	render(){
		const { Ch, O, L, E } = this.props;
		let renderChole = () => {
			return (
				<span>
					<span className="text-primary">Ch{Ch.num}{Ch.letter}</span>
					<span className="text-success">O{O.num}{O.letter}</span>
					<span className="text-danger">L{L.num}{L.letter}</span>
					<span className="text-warning">E{E.num}{E.letter}</span>
				</span>
			);
		};
		let renderStage = () => {
			// logic for Stage Sum
			let valueSum = 0;
			const numValues = [Ch.num, O.num, L.num, E.num];

			for (let index = 0; index < numValues.length; index++) {
				const element = numValues[index];
				if (typeof (element) === "number") {
					valueSum = element + valueSum;
				}
			}
			// Switch Statement depending on valueSum
			let stageValue = (valueSum) => {
				if (valueSum >= 1 && valueSum <= 3) {
					return "I";
				} else if (valueSum >= 4 && valueSum <= 8){
					return "II";
				} else if (valueSum > 8){
					return "III";
				}else {
					return "";
				}
			};
			return `${stageValue(valueSum)}`;
		};
		let renderX = () => {
			// Logic for X
			// if(){

			// }
			return "x";
		};
		let renderOverAllStage = () => {
			if (Ch.num === "X" && O.num === "X" && L.num === "X" && E.num === "X") {
				return "Overall stage cannot be calculated";
			}else {
				return (
					<span>
						{renderStage()}
						{renderX()}
						{/* {!this.state.stateX && ""} */}
					</span>
				);
			}
		};
		
		return (

			<footer>
				<div className="container d-flex justify-content-between">
					<div><strong>ChOLE Classification</strong>{renderChole()}</div>
					<div>
						<strong>OverallStage</strong>
						{renderOverAllStage()}
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
