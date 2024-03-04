import axios from 'axios';

export const todosApi = axios.create({
  baseURL: 'http://localhost:8080/api/todos',
});
