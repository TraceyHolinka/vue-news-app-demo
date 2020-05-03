<script>
import menu from './data/menu.json'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      menu
    }
  }
}
</script>

<template>
  <div
    id="app"
    :class="$style.app"
  >
    <TheHeader v-bind="{menu}" />
    <router-view />
    <TheFooter />
  </div>
</template>

<style module>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
@import url('assets/vars-color.css');

* {
  box-sizing: border-box;
}
html {
  text-rendering: optimizeLegibility;
}
body {
  margin: 0;
  background: var(--color-background);
  font-family: 'Open Sans', sans-serif;
  color: var(--color-font);
}
a {
  color: var(--color-link);
  text-decoration: none;
}
.app {
  max-width: 640px;
  margin: 24px auto 0;
}
</style>
