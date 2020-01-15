const axios = require('axios');
let api = null;

if (process.env.NODE_ENV === 'production') {
	api = axios.create({ baseURL: `${window.location.origin}/api` });
} else {
	api = axios.create({ baseURL: 'http://localhost:5000/api' });
}

export default api;
