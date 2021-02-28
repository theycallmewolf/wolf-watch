import { getLocationByID } from '../services/GetLocationByID';
import handleWeather from './weather.controller';

const execute = async () => {
  const location = await getLocationByID();
  const time = await handleWeather(location.city);

  return time ? time : null;
};

export default execute;
