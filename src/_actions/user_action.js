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

export const detailProjects = (projectId) => {
    return axios.get(`/projects/${projectId}`)
      .then(response => {
        if (response && response.data) {
          return response.data;
        } else {
          console.error('Invalid response structure:', response);
          throw new Error('Invalid response structure');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  };
  
