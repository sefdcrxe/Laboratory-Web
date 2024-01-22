// user_action.js
import axios from '../../src/components/axiosConfig'

export const fetchProjects = () => {
  return axios.get('/projects')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it in the component
    });
};

export const detailProjects = () => {
    return axios.get('/projects/${projectId}')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the component
      });
  };
