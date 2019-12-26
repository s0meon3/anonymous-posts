const config = require('config');
const { setupDB } = require('./test-setup');
const app = require('../server');
const supertest = require('supertest');

const request = supertest(app);

setupDB(config.get('mongoTestURI'));

describe('Tests all endpoints.', () => {
	it('Gets the /api/posts endpoint, also tests if test DB is empty.', async done => {
		const getRes = await request.get('/api/posts');
		expect(getRes.body).toBeInstanceOf(Array);
		expect(getRes.body).toEqual([]);
		expect(getRes.status).toBe(200);
		done();
	});
});
