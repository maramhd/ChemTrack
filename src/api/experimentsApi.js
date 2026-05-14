import api from './axios';

export const getExperiments = async () => {
  const response = await api.get('/experiments/');
  return response.data;
};