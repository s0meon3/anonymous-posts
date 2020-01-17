import React, { Component } from 'react';
import './PostList.css';
import Post from './Post';
import api from '../helpers/axiosset';
class PostList extends Component {
	render() {
		const { content, postHandler } = this.props;

		return (
			<div>
				<ul>
					{content.map((post, index) => (
						<Post
							key={post._id}
							title={post.title}
							body={post.body}
							hearts={post.hearts}
							heartHandler={() => {
								api
									.put(`/hearts/${post._id}`)
									.then(postHandler('hearts')(post.hearts + 1)(index));
							}}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default PostList;
