import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
	return (
		<div className='App'>
			<Navbar dark color='primary'>
				<div className='container'>
					<NavbarBrand href='/'>A2OJ_live</NavbarBrand>
				</div>
			</Navbar>
		</div>
	);
}

export default App;