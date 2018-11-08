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
                    <span className="text-primary"><strong>Ch</strong>{Ch.num}{Ch.letter} </span>
					<span className="text-success"><strong>O</strong>{O.num}{O.letter} </span>
					<span className="text-danger"><strong>L</strong>{L.num}{L.letter} </span>
					<span className="text-warning"><strong>E</strong>{E.num}{E.letter}</span>
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
				<div className="container d-sm-flex justify-content-start">
					<div className="font-weight-bold"><span className="mr-2">ChOLE classification:</span>{renderChole()}</div>
					<div className="font-weight-bold"><span className="mr-2">Overall Stage:</span>{renderOverAllStage()}</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
