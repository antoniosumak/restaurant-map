import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RestaurantFunction, RestaurantParams } from '../Types/RestaurantTypes';

export default class MapService {
  map = {} as L.Map;

  constructor(mapElement: HTMLElement) {
    this.map = new L.Map(mapElement, {
      zoomControl: false,
    }).setView([46.286947, 16.3213], 20);
  }

  initMap() {
    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 25,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(this.map);
  }

  getMapBounds(): RestaurantParams {
    const bounds = this.map.getBounds();
    return {
      tr_latitude: bounds.getNorthEast().lat,
      tr_longitude: bounds.getNorthEast().lng,
      bl_latitude: bounds.getSouthWest().lat,
      bl_longitude: bounds.getSouthWest().lng,
    };
  }

  getBoundsOnMapMove({ callBack }: RestaurantFunction) {
    this.map.on('moveend', () => {
      const bounds = this.getMapBounds();

      callBack(bounds);
    });
  }
}
