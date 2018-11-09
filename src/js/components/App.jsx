import React from "react";
import AOS from "aos";
import $ from "jquery";

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
			resizeImg: true
		};
        this.updateComp = this.updateComp.bind(this);
        this.toggleSetting = this.toggleSetting.bind(this);
	}
	componentDidMount(){
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-out-sine",
			delay: 100,
        });
        $(function () {
            $(`[data-toggle="popover"]`).popover({
                trigger: "focus",
                container: "body",
                html: true,
            });
            
        })
    }
    toggleSetting(setting){
        this.setState({[setting]:!this.state[setting]})
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
            E: this.state.E,
        }
        
        const breakP = "lg";

		return (
			<div className="app">
                <Header onUpdateSetting={this.toggleSetting} settings={{ hints, resizeImg }} />
				<div className="container pb-5 mb-5">
                    <div className={`d-${breakP}-flex justify-content-${breakP}-between align-items-start pt-3 pb-sm-3 pb-5 mb-5 mb-sm-0`}>
						
						{/* Hide On Mobile */}
                        <div className={`d-none d-${breakP}-block`}>
							<IdentifierCol />
						</div>
						<E selectedValue={chole.Ch} settings={{hints,resizeImg,breakP}} onUpdateSelect={this.updateComp}/>
						<OCS selectedValue={chole.O} settings={{hints,resizeImg,breakP}} onUpdateSelect={this.updateComp}/>
						<LTC selectedValue={chole.L} settings={{hints,resizeImg,breakP}} onUpdateSelect={this.updateComp}/>
						<ETVMP selectedValue={chole.E} settings={{hints,resizeImg,breakP}} onUpdateSelect={this.updateComp}/>
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
