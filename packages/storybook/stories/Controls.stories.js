import Switch from '@th/frontend/src/components/ToggleSwitch'
import { words2 } from './faker'

const label = words2

export default { 
  title: 'Controls',
}

export const ToggleSwitch = (args, { argTypes })  => ({
  components: { Switch },
  template: `<Switch v-bind="{ disabled, toggled }">${label}</Switch>`,
  props: Object.keys(argTypes),
})

ToggleSwitch.args = {
  disabled: false,
  toggled: false,
}
