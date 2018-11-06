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
			if (window.innerWidth >= 720) {
				return "show";
			}
		};
        const {title,name,children,selectedValue} = this.props;
		return (
			<div className={`chole-section accordion chole-section-${name}`} id={`accordion${name}`}>
				{/* On Desktop Display Title */}
				<h5 className="chole-title text-primary d-none d-md-block">{title}</h5>

				{/* Display Collapsible on Mobile */}
				<div className="d-md-none">
					<button className="collapsible-btn " type="button" data-toggle="collapse" data-target={`#collapse${name}`} aria-expanded="true" aria-controls={`collapse${name}`}>
                        <span>{title}</span>
                        <span className="ml-2">{selectedValue.num}{selectedValue.letter}</span>
					</button>
				</div>
				{/* On Mobile Collapse */}
				<div id={`collapse${name}`} className={`collapse mt-2 mt-sm-0  ${renderMobile()}`} aria-labelledby={`heading${name}`} data-parent={`#accordion${name}`}>
                    <div className="d-flex  d-sm-block">
                        <div className="d-md-none">
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
