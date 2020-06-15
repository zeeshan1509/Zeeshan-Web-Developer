import 	React from 'react';
// import zeeshan from './zeeshan.jpg';
import logo_html from './logo_html.png';
import logo_css from './logo_css.png';
import logo_node from './logo_node.png';
import logo_react from './logo_react.png';
import logo_postgres from './logo_postgres.png';
import js_logo from './js_logo.png'

import './Header.css'



const Header = ({onRouteChange}) =>{
	return(
		<div>
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Bubblegum+Sans" />
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Spinnaker" />
		



			 <section id="showcase"  >
				<div className="container" >
					<h1>
						Zeeshan Rabbani Web Developer & Designer
					</h1>
					<p>Hii, I'm a fullstack Developer located in Tarbella, Pakistan,
					I am a University Student looking to take on more work and to increase my Skills
					as a Web Developer. <br/> "in a sea of ordinary, make sure your website set 
					apart from the competition.
				    </p>
			<div>

						<button onClick={()=>onRouteChange('contact')} className="btn btn4">Contact Me</button>
			</div>
					   
				</div>


			</section>



	<section id="boxes">
		<div className="container">
			<h1>My Current Skills</h1>
			<div className="gridd">
			<div className="box">
				<img src={logo_html} alt="zee"/>
				<h3>
					HTML5 Markup
				</h3>
				<p>We work on HTML5 which is a standard markup languague for documents designed to be displayed in web browser</p>

			</div>
			<div className="box">
				<img src={logo_css} alt="zee"/>
				<h3>
					CSS Styling
				</h3>
				<p>We use CSS3 for styling it describes how HTML elements are to be displayed on screen or in other media.
				It can control the layout of multiple web pages all at once.</p>

			</div>
			<div className="box">
				<img src={js_logo} alt="zee"/>
				<h3>
					JavaScript
				</h3>
				<p>We use JavaScript to add dynamic and interactive elements to our website.
				 It is used on the client-side and server-side.</p>

			</div>
			<div className="box">
				<img src={logo_react} alt="zee"/>
				<h3>
					ReactJS
				</h3>
				<p> React is an open-source JavaScript library for building user interfaces.
				 React makes it painless to create interactive UIs.</p>

			</div>
			<div className="box">
				<img src={logo_node} alt="zee"/>
				<h3>
					Nodejs & Express
				</h3>
				<p>We use node and express for our back-end work.Express is a popular unopinionated web framework,
				 written in JavaScript and hosted within the Node.js runtime environment.
				 </p>

			</div>
					<div className="box">
				<img src={logo_postgres}alt="zee"/>
				<h3>
					PostgreSQL
				</h3>
				<p>We use use postegreSQL because it is a highly stable database management system.
				 PostgreSQL is used as the primary data store or data warehouse for many web,
				  mobile, geospatial, and analytics application</p>

			</div>
			</div>
			
		</div>
		

	</section>

	 <section id="footers">
	 	<footer>
	 		
	 			<div className="media">
	 			<ul>
	 				<li><a href="https://www.facebook.com/zeerabbani15"
	 				 target="_blank" rel="noopener noreferrer" ><i className="fa fa-facebook-official" aria-hidden="true"></i> </a></li>
	 				<li><a  href="https://twitter.com/zeerabbani15"
	 				 target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"> </i> </a> </li>
	 				<li><a href="https://github.com/zeeshan1509"
	 				target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"> </i> </a> </li>
	 				<li><a href="https://www.linkedin.com/in/zeeshan-rabbani-7240ab180"
	 				 target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
	 				
	 			</ul> 
	 			</div>
	 		
	 		<p>Zeeshan Web Developer & Designer &copy; 2020</p>
	 	</footer>
	 </section>



  	</div>

	)
} 
 
export default Header;