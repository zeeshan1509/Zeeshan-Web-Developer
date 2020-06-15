import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import 'react-status-alert/dist/status-alert.css';
const Contact = () => {


function sendEmail(e) {
    	e.preventDefault();
    	emailjs.sendForm('gmail', 'zeetemplate', e.target, 'user_fvg91QdamyvixvkiqLz7B')
    	.then((result) => {
    		if(result.text==="OK"){
    			const alertId = StatusAlertService.showSuccess('Success!!');
     		}
      	}, (error) => {
        console.log(error.text);
      	});
  	}

  return (
	    <div className="pa3 mt4 flex justify-center">

	    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Bubblegum+Sans" />
	    <form className="zee contact-form br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" onSubmit={sendEmail}>
			<div className=" pa4 black-80 ba b--transparent ph0 mh0">
			<h1 className="f1 fw6 ph0 mh0">Contact Us</h1>
      		<p className="f3 b pb0 pa1">Please fill in your Contact information and we will get back to you as soon as possible</p>
			<div className="flex justify-center">
				<img  className="pr2" alt="zeerabbani1234@gmail.com" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAzdjE4aDI0di0xOGgtMjR6bTYuNjIzIDcuOTI5bC00LjYyMyA1LjcxMnYtOS40NThsNC42MjMgMy43NDZ6bS00LjE0MS01LjkyOWgxOS4wMzVsLTkuNTE3IDcuNzEzLTkuNTE4LTcuNzEzem01LjY5NCA3LjE4OGwzLjgyNCAzLjA5OSAzLjgzLTMuMTA0IDUuNjEyIDYuODE3aC0xOC43NzlsNS41MTMtNi44MTJ6bTkuMjA4LTEuMjY0bDQuNjE2LTMuNzQxdjkuMzQ4bC00LjYxNi01LjYwN3oiLz48L3N2Zz4="/>
				<p className=" f6">zeerabbani1234@gmail.com</p>
			</div>
			</div>
			<label className="db fw6 lh-copy f3" htmlFor="name">Name</label>
			<input name="name" aria-label="Name"
			className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
			required
			type="text" aria-describedby="name-desc"/>
			<label className="db fw6 lh-copy f3" htmlFor="email">Email</label>
			<input id="user_email" name="email" aria-label="Email"
			className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
			required 
			type="email" 
			aria-describedby="name-desc"/>
			<label className="db fw6 lh-copy f3" htmlFor="message">Message</label>
	    	<input required type="text" id="comment" aria-label="Message" name="message" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
	    	aria-describedby="comment-desc"/>
			<br/><br/>
			<StatusAlert style={{color: "red"}} /> 
			<button className="btn btn4">Submit</button>
		</form>
	</div>
  );
}
			

export default Contact;