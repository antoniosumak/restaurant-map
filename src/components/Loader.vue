<template>
  <div
    class="absolute z-[1000] bg-[rgba(255,255,255,0.4)] flex items-center justify-center inset-0"
  >
    <div class="spinner"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
<style scoped>
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #474bff 94%, #0000) top/9px 9px
      no-repeat,
    conic-gradient(#0000 30%, #474bff);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner-c7wet2 1s infinite linear;
}

@keyframes spinner-c7wet2 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
