import React, { Component } from 'react';
import './NavBar.css';
import { FiRefreshCw } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

export default class NavBar extends Component {
	render() {
		return (
			<div className='navbar'>
				<ul>
					<li>
						<a href='https://github.com/s0meon3/anonymous-posts/blob/master/README.md'>
							anonymous-posts
						</a>
					</li>
					<li>
						<a
							className='refresh'
							onClick={() => {
								window.location.reload(false);
							}}
						>
							<FiRefreshCw size={45} />
						</a>
					</li>
					<li>
						<a href='/api/posts'>api</a>
					</li>
					<li>
						<a
							className='git'
							href='https://github.com/s0meon3/anonymous-posts'
						>
							<FiGithub size={50} />
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
