import React from 'react';
import './App.css';

import NavBar from './components/Main';
import Main from './components/NavBar';

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<NavBar className='navbar' />
				<Main />
			</div>
		);
	}
}
export default App;
