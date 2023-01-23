export type RestaurantParams = {
  bl_latitude: number;
  tr_latitude: number;
  bl_longitude: number;
  tr_longitude: number;
};

export interface RestaurantFunction {
  callBack: (bounds: RestaurantParams) => any;
}

export type Restaurant = {
  address: string;
  description: string;
  name: string;
  open_now_text: string;
  phone: string;
  photo: { images: { large: { url: string } } };
  price_level: string;
  rating: string;
  latitude: number;
  longitude: number;
  location_id: string;
};
