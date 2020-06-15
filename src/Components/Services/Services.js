import React from 'react';
import design from './design.jpg'
import developer from './developer.png'
import cad from './cad.png'
import './Services.css';

const Services =({onRouteChange}) =>{
	return(
		<div>
			<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Bubblegum+Sans" />
			<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Spinnaker" />
			


<div className="cards">

					<article className="grow  br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 ">
					  <img src={design} className="db w-100 br2 br--top" alt="web design"/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f4 f4-ns mv0">Web Design</h1>
					      </div>

					    </div>
					    <p className="f5 lh-copy measure mt2 mid-gray">
					      We work with applications written in React.
					       We work with JavaScript development: bootstraping, refactoring, improving the structure,
					       reliability, build setup. Our layouts will work on any device, big or small.
					        Strong preference for easy to use, intuitive UX/UI.
					    </p>
					  </div>
				</article>
				<article className="grow br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5">
					  <img src={developer} className="db w-100 br2 br--top" alt="development"/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f4 f4-ns mv0">Web Development</h1>
					      </div>

					    </div>
					    <p className="f5 lh-copy measure mt2 mid-gray">
					     On the backend we work with Node JS. We can work with with APIs, remote data synchronizations,
					      cloud servers, asynchronous workers. We different types of databases 
					      (like PostgreSQL, MySQL, Redis). We write unit and system tests using JEST.
					       We offer Fast load times and lag free interaction.
					        
					    </p>
					  </div>
				</article>

				<article className="grow br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5">
					  <img src={cad} className="db w-100 br2 br--top" alt="CAD"/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f4 f4-ns mv0">AutoCAD</h1>
					      </div>

					    </div>
					    <p className="f5 lh-copy measure mt4 mid-gray">
					       	We also work with autocad to present your work imagination with calculated and
					      	specific measurements. We develop applications using autoCAD 
					      	in both 2D and 3D formats.
					    </p>
					  </div>
				</article>
</div>

		</div>


		)
}

export default Services;