import ToggleSwitch from '../components/ToggleSwitch'
import { words2 } from './faker'

const label = words2

export default { 
  title: 'ToggleSwitch',
}

export const Off = () => ({
  components: { ToggleSwitch },
  template: `<ToggleSwitch v-bind="{ toggled: false }" style="max-width: 460px">${label}</ToggleSwitch>`
})

export const Disabled = () => ({
  components: { ToggleSwitch },
  template: `<ToggleSwitch v-bind="{ toggled: false, disabled: true }" style="max-width: 460px">${label}</ToggleSwitch>`
})

export const On = () => ({
  components: { ToggleSwitch },
  template: `<ToggleSwitch v-bind="{ toggled: true }" style="max-width: 460px">${label}</ToggleSwitch>`
})

export const OnDisabled = () => ({
  components: { ToggleSwitch },
  template: `<ToggleSwitch v-bind="{ toggled: true, disabled: true }" style="max-width: 460px">${label}</ToggleSwitch>`
})
