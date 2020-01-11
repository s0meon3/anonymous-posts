import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';

import './Main.css';

import PostList from './PostList';
import Loading from './Loading';
import PostForm from './PostForm';

const content = [
	{
		_id: 1,
		title: 'Post 1',
		body: 'Hey, Post1 here! Really small tho. No claps, no comments...',
		hearts: 0,
		comments: []
	},
	{
		_id: 2,
		title: 'Post 2',
		body:
			'Hey, Post2 here! A little bigger than the other one. 7 claps, 1 comment... Thank you for taking a look at the repo',
		hearts: 7,
		comments: [
			{
				body: 'Comment 1!'
			}
		]
	},
	{
		_id: 3,
		title: 'Post 3, lalala',
		body:
			'Hey, Post3 here! Bigger than the others but really, really repetitive. 22 claps, 3 comments.\nReally, I have 22 claps and 3 comments, lololololol. \nHeard me? 22 claps and 3 comments!!!!!!',
		hearts: 22,
		comments: [
			{
				body: 'Comment 1, really small...'
			},
			{
				body:
					'Comment 2, really small... Buuuut not that small hahaha. 123321 call me.'
			},
			{
				body:
					'Comment 3, the biggest one. I have a lot of words see????? Yeah, I do have a lot of chars!\nAnd a line break...'
			}
		]
	},
	{
		_id: 4,
		title: 'Post 4, lalala',
		body:
			'Hey, Post 4 here! Bigger than the others but really, really repetitive. 22 claps, 3 comments.\nReally, I have 22 claps and 3 comments, lololololol. \nHeard me? 22 claps and 3 comments!!!!!!',
		hearts: 22,
		comments: [
			{
				body: 'Comment 1, really small...'
			},
			{
				body:
					'Comment 2, really small... Buuuut not that small hahaha. 123321 call me.'
			},
			{
				body:
					'Comment 3, the biggest one. I have a lot of words see????? Yeah, I do have a lot of chars!\nAnd a line break...'
			}
		]
	}
];

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showing: 'posts',
			content: content
		};

		this.toogleShowing = this.toogleShowing.bind(this);
		this.postHandler = this.postHandler.bind(this);
	}

	componentDidMount() {
		console.log('fetching api...');
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

	render() {
		switch (this.state.showing) {
			case 'posts':
				return (
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
				);
			case 'loading':
				return <Loading />;
			case 'form':
				return <PostForm />;
			default:
				return <p>Something went wrong...</p>;
		}
	}
}
