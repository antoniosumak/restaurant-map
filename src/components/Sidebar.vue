<template>
  <div class="absolute z-[900] w-[400px] h-full left-0 top-0 bottom-0 bg-white">
    <img
      class="w-full h-[200px] object-fit"
      :src="selectedRestaurant?.photo?.images?.large?.url"
      alt="restaurant image"
    />
    <div class="px-4 py-2">
      <h2 class="font-medium text-2xl">{{ selectedRestaurant.name }}</h2>
      <div class="flex items-center gap-1 mt-2">
        <i class="pi pi-map-marker text-slate-500"></i>
        <p class="text-xs text-slate-400">{{ selectedRestaurant.address }}</p>
      </div>
      <p>
        {{ selectedRestaurant.rating }} | {{ selectedRestaurant.price_level }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Restaurant } from '../Types/RestaurantTypes';

export default defineComponent({
  components: {},
  props: {
    selectedRestaurant: {
      type: Object as PropType<Restaurant>,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>
<style scoped></style>
