import { api } from '../infra/api';
import { showToast } from './UseToast';

export const getApiData = async ({ city }) => {
  try {
    const response = await api.get(`location/${city}`);
    return response.data;
  } catch (error) {
    console.log(error);

    showToast({
      title: `Hot or cold in ${city}?`,
      description: `No clue. We couldn't get the weather report.`,
    });
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const time = `${year}-${month}-${day} ${hours}:${minutes}`;

    return {
      location: {
        title: '',
      },
      time,
      weather: {
        max_temp: 0,
        min_temp: 0,
        the_temp: 0,
        predictability: 0,
        weather_state_abbr: '',
      },
    };
  }
};
