import React, { Component } from 'react';
import './PostList.css';
import Post from './Post';

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
							heartHandler={() => postHandler('hearts')(post.hearts + 1)(index)}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default PostList;
