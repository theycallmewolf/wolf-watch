import { api } from '../infra/api';

export const getLocationByID = async () => {
  const response = await api('https://ipapi.co/json/');
  return response.data;
};
