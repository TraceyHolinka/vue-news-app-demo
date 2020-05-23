import {addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Vue from 'vue'
import directives from '../../src/directives'
import '../../src/assets/global.module.css'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    // defaultViewport: 'iphonexsmax'
  }
})

// register global directives.
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})
