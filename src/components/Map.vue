<template>
  <Sidebar v-if="isSidebarOpened" :selected-restaurant="selectedRestaurant" />
  <loader v-if="isLoading && data.length" />
  <div class="w-screen h-screen" id="map"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MapService from '../Services/MapService';
import MarkerService from '../Services/MarkerService';
import RestaurantsService from '../Services/RestaurantsService';
import { RestaurantParams, Restaurant } from '../Types/RestaurantTypes';
import Sidebar from './Sidebar.vue';
import L from 'leaflet';
import Loader from './Loader.vue';
export default defineComponent({
  components: { Loader, Sidebar },
  data() {
    return {
      mapService: {} as MapService,
      markerService: {} as MarkerService,
      restaurantService: new RestaurantsService(),
      data: [] as Restaurant[],
      selectedRestaurant: {} as Restaurant | null,
      isLoading: false,
      isSidebarOpened: false,
    };
  },
  mounted() {
    this.mapService = new MapService(
      document.getElementById('map') as HTMLDivElement
    );

    this.mapService.initMap();

    this.mapService.getBoundsOnMapMove({ callBack: this.getMapBounds });

    if (!(this.mapService.map instanceof L.Map)) {
      return;
    }

    this.markerService = new MarkerService(this.mapService.map);
  },

  methods: {
    async getMapBounds(bounds: RestaurantParams) {
      this.markerService.removeGroup();
      this.isLoading = true;
      try {
        this.data = await this.restaurantService.getRestaurantsInBounds(bounds);
        this.addMarkersToMap(this.data);
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },

    async addMarkersToMap(data: Restaurant[]) {
      data.forEach((restaurant) => {
        if (!restaurant.latitude || !restaurant.longitude) {
          return;
        }

        this.markerService.addMarker({
          lat: Number(restaurant.latitude),
          lng: Number(restaurant.longitude),
          additionalProperties: { id: restaurant.location_id },
          eventHandlers: {
            click: this.revealRestaurantDetails,
          },
        });
      });
    },

    revealRestaurantDetails(event: L.LeafletEvent) {
      const markerId = event.target.options.title;

      this.selectedRestaurant =
        this.data.find((restaurant) => restaurant.location_id === markerId) ||
        null;

      this.isSidebarOpened = true;
    },
  },
});
</script>
<style scoped></style>
