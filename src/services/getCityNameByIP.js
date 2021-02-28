import { api } from '../infra/api';

export const getCityNameByIP = async () => {
  const response = await api('https://ipapi.co/json/');
  return response.data.city;
};
