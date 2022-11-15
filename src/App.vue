<template>
  <div class="container">
    <CalulatorComponent />
  </div>
</template>

<script>
import CalulatorComponent from '@/components/Calulator.vue'

export default {
  name: 'App',
  components: { CalulatorComponent }
}
</script>

<style>
.container {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
