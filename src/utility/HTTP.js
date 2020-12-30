import axios from 'axios';

const HTTP = axios.create({
	baseURL: 'https://fakestoreapi.com',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default HTTP;
