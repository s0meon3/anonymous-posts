import React, { Component } from 'react';
import './PostForm.css';
import api from '../helpers/axiosset';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler = event => {
		const key = event.target.name;
		const value = event.target.value;
		this.setState({ [key]: value });
	};

	render() {
		const { toogleShowing, addPost } = this.props;

		return (
			<div>
				<form
					onSubmit={event => {
						event.preventDefault();
						api
							.post('/posts', {
								title: this.state.title,
								body: this.state.body
							})
							.then(res => {
								if (res.data.success === false) {
									alert(
										'Something happened... Please, check your form fields.'
									);
								} else {
									toogleShowing('posts');
									addPost(res.data);
								}
							});
					}}
				>
					<label>
						<input
							type='text'
							name='title'
							onChange={this.changeHandler}
							placeholder='Post title'
						></input>
					</label>
					<label>
						<textarea
							name='body'
							onChange={this.changeHandler}
							placeholder='Post text, remember, be nice!'
						></textarea>
					</label>
					<input type='submit' value='Create!' />
				</form>
			</div>
		);
	}
}

export default PostForm;
