import { api } from './api';

export const getWeather = async ({ woeid }) => {
  const response = await api.get(`weather/${woeid}`);
  return response.data;
};

export const getLocation = async ({ local }) => {
  const response = await api.get(`location/${local}`);
  return response.data[0];
};
