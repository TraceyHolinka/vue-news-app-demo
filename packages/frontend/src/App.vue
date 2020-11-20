<script>
import menu from './data/menu.json'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import styles from './assets/global.module.css'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      menu,
      styles
    }
  }
}
</script>

<template>
  <div
    id="app"
    :class="styles.app"
  >
    <TheHeader v-bind="{menu}" />
    <router-view />
    <TheFooter />
  </div>
</template>
