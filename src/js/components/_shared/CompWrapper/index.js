import React, {Component} from "react";

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
		const {title,name,children} = this.props;
		return (
			<div className="chole-section accordion" id={`accordion${name}`}>
				{/* On Desktop Display Title */}
				<h5 className="chole-title text-primary d-none d-md-block">{title}</h5>

				{/* Display Collapsible on Mobile */}
				<div className="d-md-none">
					<button className="btn btn-dark btn-block collapsible-btn" type="button" data-toggle="collapse" data-target={`#collapse${name}`} aria-expanded="true" aria-controls={`collapse${name}`}>
						{title}
					</button>
				</div>
				{/* On Mobile Collapse */}
				<div id={`collapse${name}`} className={`collapse mt-2 mt-sm-0 ${renderMobile()}`} aria-labelledby={`heading${name}`} data-parent={`#accordion${name}`}>
					{children}
				</div>
			</div>
		);
	}
}

export default CompWrapper;
