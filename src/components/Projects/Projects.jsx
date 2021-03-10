import React, { Component } from "react";
import Project from "./../Project/Project";

import "./styles.css";
import projectList from "./../../project-list";

const Projects = () => {
	return (
		<div className='projects'>
			<div className='header'>
				<div className='projects-title'>
					Work that <br />
					Reflects me
				</div>
				<div className='desc'>
					This gallery contains some of the projects I have worked on my journey
					of learning Computer Science.
				</div>
			</div>
			<div className='project-list'>
				{projectList.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
