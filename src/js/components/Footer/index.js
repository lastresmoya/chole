import React, {Component} from "react";

class Footer extends Component{
	constructor(props){
		super(props);
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
			// Logic for Stage Number
			let valueSum = 0;
			const numValues = [Ch.num, O.num, L.num, E.num];
            // Sum all values of num that are numbers
			for (let index = 0; index < numValues.length; index++) {
				const element = numValues[index];
				if (typeof (element) === "number") {
					valueSum = element + valueSum;
				}
			}
			// Switch Statement depending on valueSum of Numbers selected
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
		let renderPostFix = () => {
            // IF any of the values of Num is an "X" , 
            // return a string of X, else return empty string
			if (Ch.num === "X" || O.num === "X" || L.num === "X" || E.num === "X"){
				return "x";
			} else return "";
		};
		let renderOverAllStage = () => {
			if (Ch.num === "X" && O.num === "X" && L.num === "X" && E.num === "X") {
                // If all the values of num are an "X", 
                // return this message
				return "Overall stage cannot be calculated";
			}else {
                // If there's no value of Num that is an "X" 
                // then render stage and postfix
				return (
					<span>
						{renderStage()}
						{renderPostFix()}
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
