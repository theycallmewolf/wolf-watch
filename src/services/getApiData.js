import { api } from '../infra/api';

export const getApiData = async ({ city }) => {
  const response = await api.get(`location/${city}`);
  return response.data;
};
