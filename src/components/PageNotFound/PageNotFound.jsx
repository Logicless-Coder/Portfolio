import React, { Component } from "react";

import "./styles.css";

const PageNotFound = () => {
	return (
		<div className='page-not-found'>
			<div className='message'>
				Oops, looks like you are lost. <br />
				To get back on track, click{" "}
				<a href='/' className='home-link'>
					here
				</a>
				.
			</div>
			<div className='art'>
				{/* <img src='./page_not_found.svg' alt='Page not Found art' /> */}
			</div>
		</div>
	);
};

export default PageNotFound;
