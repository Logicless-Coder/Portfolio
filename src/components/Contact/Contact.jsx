import React from "react";
import emailjs, { init } from "emailjs-com";
import dotenv from "dotenv";

import "./styles.css";

dotenv.config();
init("user_7R8vxO214HFNclo20RKfO");

const Contact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_l3ahg3l",
				"template_rgbrqvg",
				e.target,
				"user_7R8vxO214HFNclo20RKfO"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	}

	return (
		<div className='contact'>
			<div>
				<form className='contact-form' onSubmit={sendEmail}>
					<input
						className='input-subject'
						type='text'
						name='subject'
						placeholder='Subject'
					/>
					<input type='text' name='name' placeholder='Name' />
					<input type='email' name='email' placeholder='Email Address' />
					<textarea name='message' placeholder='Message' rows={5} />
					<input type='submit' value='Send' />
				</form>
				<div className='contact-us-img'>
					{/* <img src='./contact_us.webp' alt='contact us illustration' /> */}
				</div>
			</div>
			<div className='socials'>
				<a id='github' href='https://github.com/Logicless-Coder'>
					{""}
				</a>
				<a
					id='linkedin'
					href='https://www.linkedin.com/in/abhishek-rathore-61668619a/'>
					{""}
				</a>
				<a id='instagram' href='https://www.instagram.com/its.the.abhishek/'>
					{""}
				</a>
				<a id='whatsapp' href='https://wa.me/919770932029'>
					{""}
				</a>
			</div>
		</div>
	);
};

export default Contact;
