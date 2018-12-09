import React, { Component } from 'react';
import '../styles/app.css';
import Img from '../img/logo-white.png';

class App extends Component {
	render() {
		return (
			<header className="header">
				<div className="logo-box">
					<img src={Img} alt="logo" className="logo" />
				</div>
				<div className="text-box">
					<h1 className="text-primary">
						<span className="text-primary-main">outdoor</span>
						<span className="text-primary-sub">is where life happens</span>
					</h1>
					<a href="#" className="btn btn-animated btn-white">Discover our tours</a>
				</div>
			</header>

		);
	}
}

export default App;