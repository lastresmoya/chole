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
			Ch: {num:"X",letter:""},
			O: {num:"X",letter:""},
			L: {num:"X",letter:""},
			E: {num:"X",letter:""},
			hints: true,
			resizeImg:true
		};
		this.updateComp = this.updateComp.bind(this);
	}
	componentDidMount(){
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-out-sine",
			delay: 100,
		});
	}
	updateComp(compName,num,letter){
		this.setState({ [compName]: {num:num,letter:letter} });
	}
	render() {
		const { hints,resizeImg} = this.state;
        const chole = {
            Ch: this.state.Ch,
            O: this.state.O,
            L: this.state.L,
            E: this.state.E
        }

		return (
			<div className="app">
				<Header/>
				<div className="container">
					<div className="d-md-flex justify-content-md-between align-items-baseline pt-3 pb-sm-3 pb-5 mb-5 mb-sm-0">
						
						{/* Hide On Mobile */}
						<div className="d-none d-md-block">
							<IdentifierCol />
						</div>
						<E selectedValue={chole.Ch} settings={{hints,resizeImg}} onUpdateSelect={this.updateComp}/>
						<OCS selectedValue={chole.O} settings={{hints,resizeImg}} onUpdateSelect={this.updateComp}/>
						<LTC selectedValue={chole.L} settings={{hints,resizeImg}} onUpdateSelect={this.updateComp}/>
						<ETVMP selectedValue={chole.E} settings={{hints,resizeImg}} onUpdateSelect={this.updateComp}/>
					</div>
				</div>
                <Footer {...chole}/>
				{/* <Footer overallStage={overallStage} chole={}/> */}
                    {/* {renderChole()} */}
                {/* </Footer>/> */}
			</div>
		);
	}
}

export default App;
