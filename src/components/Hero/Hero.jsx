import React from "react";

import "./styles.css";

const Hero = () => {
	return (
		<div className='hero'>
			<div className='left'>
				<div className='title'>
					Coding Dreams <br />
					into Reality
				</div>
				<div className='subtitle'>Programmer | Web Developer</div>
				<div className='call-to-action'>
					<a href='/projects'>My Work</a>
				</div>
			</div>
			<div className='right'>
				<img
					className='hero-illustration'
					src='./hero.svg'
					alt='man sitting on desk coding illustration'
				/>
			</div>
		</div>
	);
};

export default Hero;
