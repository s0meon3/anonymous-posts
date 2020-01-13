require('dotenv').config();
const Post = require('../models/Post');
const { setupDB } = require('./test-setup');
const app = require('../server');
const supertest = require('supertest');

const request = supertest(app);
setupDB(process.env.MONGO_TEST_URI || 'mongodb+srv://heyheyhey:hahahey123@cluster0-n9vmk.mongodb.net/test?retryWrites=true&w=majority');

describe('Tests all endpoints.', () => {
	it('Gets at the /api/posts endpoint, also tests if test DB is empty.', async done => {
		const getRes = await request.get('/api/posts');

		//Check if DB is empty.
		expect(getRes.body).toEqual([]);

		//Check status code.
		expect(getRes.status).toBe(200);
		done();
	});

	it('Posts at the /api/posts to create a new post.', async done => {
		const postRes = await request.post('/api/posts').send({
			title: 'pOSt 1!! hA hA',
			body: 'Hey! Post body here!'
		});
		const expectedPost = {
			title: 'Post 1!! Ha Ha',
			body: 'Hey! Post body here!',
			hearts: 0
		};

		//Check status code.
		expect(postRes.status).toBe(200);

		//Check if sends a response with the post object.
		expect(postRes.body).toMatchObject(expectedPost);

		//Check if is saved at the database
		const { _id: postId } = postRes.body;
		const post = await Post.findById(postId).exec();

		expect(post).toMatchObject(expectedPost);

		done();
	});

	it('Posts at api/comments/:postId to create.', async done => {
		const postRes = await request.post('/api/posts').send({
			title: 'Example Post',
			body: 'Testing comments, hope this one works'
		});
		const expectedPost = {
			title: 'Example Post',
			body: 'Testing comments, hope this one works',
			comments: [
				{
					body: 'Test comment'
				}
			]
		};
		const expectedComment = { body: 'Test comment' };

		const { _id: postId } = postRes.body;

		const commentRes = await request.post(`/api/comments/${postId}`).send({
			body: 'Test comment'
		});

		//Check status code.
		expect(commentRes.status).toBe(200);

		//Check if sends a response with the post object.
		expect(commentRes.body).toMatchObject(expectedPost);

		//Check if is saved at the database
		const post = await Post.findById(postId).exec();
		expect(post.comments[0]).toMatchObject(expectedComment);

		done();
	});

	it('Add a new heart to a post, uses api/hearts/:postId', async done => {
		const postRes = await request.post('/api/posts').send({
			title: 'Example Post',
			body: 'Testing hearts, hope this one works'
		});
		const expectedPost = {
			title: 'Example Post',
			body: 'Testing hearts, hope this one works',
			hearts: 1
		};
		const { _id: postId } = postRes.body;
		const heartsRes = await request.put(`/api/hearts/${postId}`);

		//Check status code.
		expect(heartsRes.status).toBe(200);

		//Check if sends a response with the post object.
		expect(heartsRes.body).toMatchObject(expectedPost);

		//Check if is saved at the database
		const post = await Post.findById(postId).exec();
		expect(post).toMatchObject(expectedPost);

		done();
	});
});
