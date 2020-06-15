import React from 'react';
import back from './back.png';
import robo from './robo.png';
import brain from './brain.png'
import './Portfolio.css';

const Portfolio =({onRouteChange}) =>{
	return(
		<div>
			<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Bubblegum+Sans" />
			

<div className="cards">

					<article className="grow  br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-4 ">
					  <img src={back} className="db w-100 br2 br--top" alt="bachground"/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f4 f4-ns mv0">Background-Generator</h1>
					      </div>
							
					    </div>
							<button className="btn btn4"><a  href="https://zeeshan1509.github.io/background-generator/"
							style={{color: "white"}} target="_blank" rel="noopener noreferrer" >See live</a></button>					  
					  </div>
				</article>


				<article className="grow br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-4">
					  <img src={robo} className="db w-100 br2 br--top" alt="robofrien"/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f4 f4-ns mv0">RoboFriend</h1>
					      </div>

					    </div>
					    
					    <button className="btn btn4"><a href="https://zeeshan1509.github.io/robofriendzee/"
					    style={{color: "white"}} target="_blank" rel="noopener noreferrer" >See live</a></button>

					  </div>
				</article>

				<article className="grow br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-4">
					  <img src={brain} className="db w-100 br2 br--top" alt="smartrain"/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f4 f4-ns mv0">A face detection app</h1>
					      </div>

					    </div>
					    
					     <button className="btn btn4"><a href="https://facedetection-smartbrain.herokuapp.com/" 
					     style={{color: "white"}} target="_blank" rel="noopener noreferrer" >See live</a></button>
					  </div>
				</article>
</div>

		</div>


		)
}

export default Portfolio;