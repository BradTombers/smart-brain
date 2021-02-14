import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css' 
import logo from './Logo.png'

const Logo = () => {
	return (
		<div className = 'ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner pa3">  
			 	<img src = {logo} stley = {{paddingTop: '5px'}} alt='logo' width = "100" height = "100"/>
			 </div>
			</Tilt>

		</div>
	);
}

export default Logo
;