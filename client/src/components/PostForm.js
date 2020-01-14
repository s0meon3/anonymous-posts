import React, { Component } from 'react';
import './PostForm.css';

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
		const { formSubmit } = this.props;

		return (
			<div>
				<form
					onSubmit={() =>
						formSubmit({ title: this.state.title, body: this.state.body })
					}
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
						<textarea placeholder='Post text, remember, be nice!'></textarea>
					</label>
					<input type='submit' value='Create!' />
				</form>
			</div>
		);
	}
}

export default PostForm;
