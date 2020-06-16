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
					      Web designing goes hand-in-hand with the web development in the creation of static website.
					      We work with JavaScript development that includes bootstraping,refactoring,
					      reliability and building setups.
					      The process involves HTML for handling the  ‘bones’ of your page while 
					      CSS for steering the style and appearance.
					      Strongly preferred,when looking for easy to use and untroublesome UX/UI.
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
							It is basically the creation of dynamic web applications.
							The process includes working with APIs, remote data synchronizations, 
							cloud servers, asynchronous workers.On the backend we work
							 with Node JS.We have used contrasting types of databases  
							i.e PostgreSQL, MySQL, Redis.Our interface offers fast load 
							times,speedy websites and lag free interaction.
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
					       	We provide our customers with flexible development platform for specialised 
					       	design and drafting applications.We permute your imaginative work into 2D
					       	 and 3D formats by utilising calculated and specific measurements.
					       	 We develop 3D and 2D applications based on our customers’ requirements.
					    </p>
					  </div>
				</article>
</div>

		</div>


		)
}

export default Services;