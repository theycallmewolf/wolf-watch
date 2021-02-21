import { getLocationByID } from '../services/GetLocationByID';
import handleWeather from './weather.controller';

const execute = async () => {
  const location = await getLocationByID();
  handleWeather(location.city);
};

export default execute;
  