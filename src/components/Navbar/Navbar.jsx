import React, { Component } from "react";

import "./styles.css";

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='brand'>
				<a href='/'>Abhishek Rathore</a>
			</div>
			<nav className='nav'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<a className='nav-link' href='/about'>
							About
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/projects'>
							Projects
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/contact'>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
