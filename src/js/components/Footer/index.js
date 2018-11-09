import React, {Component} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FaIcon from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";


class Footer extends Component{
	constructor(props){
		super(props);
		this.state = { 
			copied: false,
			copiedNotification : false
		};
		this.onCopy = this.onCopy.bind(this);
	}
	onCopy(){
		this.setState({ copied: true, copiedNotification: true});
		setTimeout(() => {
			this.setState({ copiedNotification: false });
		}, 3000);
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
    			return `${renderStage()}${renderPostFix()}`;
    		}
        };
        let getCholeStringToCopy = () => {
            let classification = `Ch${Ch.num}${Ch.letter}O${O.num}${O.letter}L${L.num}${L.letter}E${E.num}${E.letter}`;
            let overallStage = renderOverAllStage();
            return `${classification}, ${overallStage}`;
        }

    	return (

    		<footer className="btn btn-light text-left">
                <CopyToClipboard onCopy={this.onCopy} text={getCholeStringToCopy()}>
    			<div className="container d-sm-flex justify-content-sm-between align-items-center">
    				<div className="d-sm-flex flex-sm-row">
    					<div className="font-weight-bold mr-sm-3 mr-0"><span className="mr-2">ChOLE classification:</span>{renderChole()}</div>
    					<div className="font-weight-bold"><span className="mr-2">Overall ChOLE stage:</span>{renderOverAllStage()}</div>
    				</div>
    				{/* <CopyToClipboard onCopy={this.onCopy} text={this.state.copiedString}> */}
    					<div className="btn btn-sm btn-light">

							{this.state.copiedNotification ? 
								<small className="text-primary">Copied <FaIcon icon={faCheckCircle} /></small> 
								: 
								<small>Copy to clipboard</small>
							}
						</div>
    				{/* </CopyToClipboard> */}
    			</div>
                </CopyToClipboard>
    		</footer>
    	);
	}
}

export default Footer;
