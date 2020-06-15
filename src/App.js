import React, {Component} from 'react';
import HeadFoot from './Components/HeadFoot/HeadFoot';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';




import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			route: 'home'
		}
	}

onRouteChange = (route) =>{
	this.setState({route: route});

}




  render() {
  	return (
    <div className="App">
    <HeadFoot onRouteChange={this.onRouteChange}/>
    	
	{	
		this.state.route ==='home' 
		? <Header onRouteChange={this.onRouteChange}/> 
		
		: ( this.state.route ==='services' ?
			<Services onRouteChange={this.onRouteChange}/>

			: ( 
				this.state.route === 'portfolio' ?
				 <Portfolio onRouteChange={this.onRouteChange} />
				 : <Contact onRouteChange ={this.onRouteChange} />
				  

				 		
				)

			)

			

	}	
    </div>
  );
}
}

export default App;
