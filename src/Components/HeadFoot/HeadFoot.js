import React from 'react';
import './HeadFoot.css'

const HeadFoot=({onRouteChange}) => {
	return(
		<div>
		<link rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
			
			<nav className="zone blue sticky">
		  		<ul className="main-nav">
			  		<li><i onClick={() => onRouteChange('home')} >Home</i></li>
			  		<li><i onClick={() => onRouteChange('portfolio')} >Portfolio</i></li>
			  		<li><i onClick={() => onRouteChange('services')} >Services</i></li>
			  		<li className="push"><i onClick={( )=> onRouteChange('contact')}>Contact</i></li>
		  		</ul>
		  	</nav>

		</div>

		)
}
export default HeadFoot;