<template>
  <div class="container">
    <h1>Calculator</h1>
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
:root {
  --bg1: rgb(179, 169, 154);
  --bg2: lightblue;
  --bg3: hotpink;
}

.container {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
