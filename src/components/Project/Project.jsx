import React, { Component } from "react";

import "./styles.css";

const Project = ({ project }) => {
	return (
		<div className='project'>
			<a href={project.link} />
			<div className='project-title'>{project.title}</div>
			<img className='project-image' src={project.image} alt='project' />
			<div className='project-desc'>{project.desc}</div>
		</div>
	);
};

export default Project;
