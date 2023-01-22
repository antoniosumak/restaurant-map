import ApiService from '../Axios/ApiService';
import { Restaurant, RestaurantParams } from '../Types/RestaurantTypes';

export default class RestaurantsService {
  async getRestaurantsInBounds({
    bl_latitude,
    tr_latitude,
    bl_longitude,
    tr_longitude,
  }: RestaurantParams): Promise<Restaurant[]> {
    const response = await ApiService.get('/list-in-boundary', {
      params: {
        bl_latitude,
        tr_latitude,
        bl_longitude,
        tr_longitude,
      },
    });

    return response.data.data;
  }
}
