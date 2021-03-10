import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import "./App.css";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Navbar />
					<Hero />
				</Route>
				<Route exact path='/about'>
					<Navbar />
					<About />
				</Route>
				<Route exact path='/projects'>
					<Navbar />
					<Projects />
				</Route>
				<Route exact path='/contact'>
					<Navbar />
					<Contact />
				</Route>
				<Route>
					<PageNotFound />
				</Route>
			</Switch>
		</Router>
		// <div>
		// 	<Navbar />
		// 	<Hero />
		// 	<About />
		// 	<Projects />
		// </div>
	);
};

export default App;
