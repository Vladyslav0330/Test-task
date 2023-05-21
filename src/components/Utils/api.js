import axios from 'axios';

axios.defaults.baseURL = 'https://646a37c6183682d61450c11f.mockapi.io/';

export default async function getUsersList() {
  try {
    const response = await axios.get('users/');
    return response.data;
  } catch (error) {
    return error.message;
  }
}
