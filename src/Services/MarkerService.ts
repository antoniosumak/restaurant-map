import { MarkerProps } from './../Types/MarkerTypes';
import L from 'leaflet';

export default class MarkerService {
  map = {} as L.Map;
  group = new L.FeatureGroup();
  constructor(map: L.Map) {
    this.map = map;
  }

  addMarker({ lat, lng, eventHandlers, additionalProperties }: MarkerProps) {
    this.group.addTo(this.map);

    if (!additionalProperties.id) {
      return;
    }

    const latLng = L.latLng(lat, lng);

    const marker = L.marker(latLng, {
      title: additionalProperties.id,
    });

    if (this.map.hasLayer(this.group)) {
      this.group.addLayer(marker);
    }

    if (eventHandlers) {
      for (const event in eventHandlers) {
        marker.on(event, eventHandlers[event]);
      }
    }
  }

  addMarkers(coordinates: MarkerProps[]) {
    coordinates.forEach((markerPosition) =>
      this.addMarker({ lat: markerPosition.lat, lng: markerPosition.lng })
    );
  }

  removeMarker(marker: L.Marker) {
    if (this.group.hasLayer(marker)) {
      this.group.removeLayer(marker);
    }
  }

  removeGroup() {
    if (this.map.hasLayer(this.group)) {
      this.group.clearLayers();
      this.group.removeFrom(this.map);
    }
  }
}
