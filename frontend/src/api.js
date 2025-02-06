import axios from 'axios';

const API_URL = "http://localhost:3000/transaction";

export const getTransactions = () => axios.get(API_URL);
export const addTransaction = (transaction) => axios.post(API_URL, transaction);

export const getCategories = () => axios.get(`${API_URL}/category`);