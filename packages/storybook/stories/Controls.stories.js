import ToggleSwitch from '@th/frontend/src/components/ToggleSwitch'
import { words2 } from './faker'

const label = words2

export default { 
  title: 'Controls',
  parameters: {
    docs: {
      description: {
        component: 'Toggle away',
      },
    },
  },
}

export const ToggleSwitchDefault = (args)  => ({
  components: { ToggleSwitch },
  template: `<ToggleSwitch v-bind="{ disabled, toggled }">${label}</ToggleSwitch>`,
  props: args
})
ToggleSwitchDefault.args = {
  disabled: false,
  toggled: false,
}
ToggleSwitchDefault.storyName = 'Toggle Switch'

