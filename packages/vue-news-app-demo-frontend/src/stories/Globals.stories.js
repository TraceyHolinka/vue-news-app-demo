import TheHeader from '../components/TheHeader.vue'
import menu from '../data/menu.json'
import TheFooter from '../components/TheFooter.vue'

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
