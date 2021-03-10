import React from "react";

import "./styles.css";

const About = () => {
	return (
		<div className='about'>
			<div className='about-left'>
				<img
					className='man-icon'
					src='./man.svg'
					alt='man sitting on desk coding illustration'
				/>
			</div>
			<div className='about-right'>
				<div className='title'>A little About Me</div>
				<div className='desc'>
					<p>
						My name is <span>Abhishek Rathore</span>. I am a sophomore at MNIT
						Jaipur majoring in <span>Computer Science and Engineering</span>.
					</p>
					<p>
						I like solving problems and thus have a knack for{" "}
						<span>Competitive Programming</span> and all sorts of puzzles. I
						also enjoy creating beautiful <span>web applications</span>.
					</p>
					<p>
						I am currently <span>available for work</span>. And I love to work a
						project.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
