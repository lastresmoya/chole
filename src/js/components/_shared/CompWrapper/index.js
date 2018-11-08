import React, {Component} from "react";
import IdentifierCol from "../IdentifierCol";


class CompWrapper extends Component {
	constructor(props){
		super(props);
		this.state= {
			width: window.innerWidth,
		};
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
	}
	componentWillMount() {
		window.addEventListener("resize", this.handleWindowSizeChange);
	}

	// make sure to remove the listener
	// when the component is not mounted anymore
	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowSizeChange);
	}

	handleWindowSizeChange() {
		this.setState({ width: window.innerWidth });
	}
	render(){        
		let renderMobile = () => {
			let breakP = function(breakP) {
				switch (breakP) {
                    case "sm":
                        return 540;
                    case "md":
                        return 720;
                    case "lg":
                        return 960;
                    case "xl":
                        return 1140;            
                    default:
                        return 720;
				}
            };

			if (window.innerWidth >= breakP(this.props.breakP)) {
				return "show";
			}
		};
		const {title,name,children,selectedValue} = this.props;
		return (
			<div className={`chole-section accordion chole-section-${name}`} id={`accordion${name}`}>
				{/* On Desktop Display Title */}
				<div className="chole-comp-header"> 
					<h5 className="chole-title">{title}</h5>
				</div>

				{/* Display Collapsible on Mobile */}
				<div className="collapsible-container">
					<div className="collapsible-btn "  data-toggle="collapse" data-target={`#collapse${name}`} aria-expanded="true" aria-controls={`collapse${name}`}>
						<span>{title}</span>
						<span className="ml-2">{selectedValue.num}{selectedValue.letter}</span>
					</div>
				</div>
				{/* On Mobile Collapse */}
				<div id={`collapse${name}`} className={`collapse mt-sm-2 ${renderMobile()}`} aria-labelledby={`heading${name}`} data-parent={`#accordion${name}`}>
					<div className="d-flex d-lg-block">
						<div className="d-lg-none">
							<IdentifierCol mobile/>
						</div>
						<div className="w-100">
							{children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CompWrapper;
