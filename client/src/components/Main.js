import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';

import './Main.css';

import PostList from './PostList';
import Loading from './Loading';
import PostForm from './PostForm';

import api from '../helpers/axiosset';

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showing: 'posts',
			content: []
		};

		this.toogleShowing = this.toogleShowing.bind(this);
		this.postHandler = this.postHandler.bind(this);
		this.formSubmit = this.postHandler.bind(this);
	}

	componentDidMount() {
		api
			.get('/posts')
			.then(res => this.setState({ content: res.data }))
			.catch(err => alert(err));
	}

	toogleShowing = change => {
		this.setState({ showing: change });
	};

	postHandler = key => value => index => {
		let contentCopy = this.state.content;

		contentCopy[index][key] = value;

		console.log(contentCopy[index]);

		this.setState({ content: contentCopy });
	};

	formSubmit = post => {
		api
			.post('/posts', {
				post
			})
			.then(res =>
				this.setState({ content: [res.data, ...this.state.content] })
			)
			.catch(err => alert(err));
	};

	render() {
		return (
			<div className='mainContainer'>
				{
					{
						posts: (
							<div className='incontainer'>
								<PostList
									className='showing'
									content={this.state.content}
									postHandler={this.postHandler}
								/>
								<button
									className='button'
									onClick={() => this.toogleShowing('form')}
								>
									<FaPlus />
								</button>
							</div>
						),
						form: <PostForm onSubmit={this.formSubmit} />,
						loading: <Loading />
					}[this.state.showing]
				}
			</div>
		);
	}
}
