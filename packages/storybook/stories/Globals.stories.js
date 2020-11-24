import TheHeader from '../../frontend/src/components/TheHeader.vue'
import menu from '../../frontend/src/data/menu.json'
import TheFooter from '../../frontend/src/components/TheFooter.vue'

export default {title: 'Globals'}

export const Header = () => ({
  components: { TheHeader },
  template: '<TheHeader v-bind="{ menu }" />',
  props: {
    menu: {
      default: () => menu
    }
  }
})

export const Footer = () => ({
  components: { TheFooter },
  template: '<TheFooter />'
})
