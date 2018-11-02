import React from "react";
import AOS from "aos";

// Components
import Header from "./Header";
import Footer from "./Footer";
import E from "./_CompE";
import OCS from "./_CompOCS";
import LTC from "./_CompLTC";
import ETVMP from "./_CompETVMP";


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			E: "X",
			OCS: "X",
			LTC: "X",
			ETVMP: "X",
			overallStage: "Overall stage cannot be calculated"
		}
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
		return (
			<div className="app">
				<Header/>
				<E/>
				<OCS/>
				<LTC/>
				<ETVMP/>
				<Footer overallStage={this.state.overallStage} chole={this.renderChole()}/>
			</div>
		);
	}
}

export default App;
