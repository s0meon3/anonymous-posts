import React, { Component } from 'react';
import './Post.css';
import { FaHeart } from 'react-icons/fa';

class Post extends Component {
	render() {
		const { title, body, heartHandler, hearts } = this.props;

		return (
			<div className='postContainer'>
				<h2>{title}</h2>
				<p>{body}</p>
				<hr />
				<p>
					<button className='heart' onClick={heartHandler}>
						<FaHeart size={30} color='white' />
					</button>{' '}
					<span className='number'>{hearts}</span>
				</p>
			</div>
		);
	}
}

export default Post;
