const axios = require('axios');

const api =
	process.env.NODE_ENV === 'production'
		? axios
		: axios.create({ baseURL: 'http://localhost:5000/api' });

export default api;
