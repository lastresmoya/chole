import React from "react";
import AOS from "aos";

// Components
import Header from "./Header";
import Footer from "./Footer";
import E from "./_CompE";
import OCS from "./_CompOCS";
import LTC from "./_CompLTC";
import ETVMP from "./_CompETVMP";
import IdentifierCol from "./_shared/IdentifierCol";


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			E: "X",
			OCS: "X",
			LTC: "X",
			ETVMP: "X",
			overallStage: "Overall stage cannot be calculated",
			hints: true,
			resizeImg:true
		};
	}
	componentDidMount(){
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-out-sine",
			delay: 100,
		});
	}
	renderChole (){
		const {E,OCS,LTC,ETVMP} = this.state;
		return (
			<span>
				<span className="text-primary">Ch{E}</span>
				<span className="text-success">O{OCS}</span>
				<span className="text-danger">L{LTC}</span>
				<span className="text-warning">E{ETVMP}</span>
			</span>
		);
	}
	render() {
		const { hints,resizeImg,overallStage} = this.state;
		return (
			<div className="app">
				<Header/>
				<div className="container">
					<div className="d-md-flex justify-content-md-between align-items-baseline py-3">
						
						{/* Hide On Mobile */}
						<div className="d-none d-md-block">
							<IdentifierCol />
						</div>
						<E settings={{hints,resizeImg}}/>
						<OCS settings={{hints,resizeImg}}/>
						<LTC settings={{hints,resizeImg}}/>
						<ETVMP settings={{hints,resizeImg}}/>
					</div>
				</div>
				<Footer overallStage={overallStage} chole={this.renderChole()}/>
			</div>
		);
	}
}

export default App;
