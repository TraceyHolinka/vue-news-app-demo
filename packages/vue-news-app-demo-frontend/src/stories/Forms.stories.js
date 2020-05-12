import { storiesOf } from '@storybook/vue'
import ToggleSwitch from '../components/ToggleSwitch'
import { words2 } from './faker'

const label = words2

storiesOf('Forms', module)
  .add('toggle switch off', () => ({
    components: { ToggleSwitch },
    template: '<ToggleSwitch v-bind="{ toggled: false }" style="max-width: 460px">' + label + '</ToggleSwitch>'
  }))
  .add('toggle switch off and disabled', () => ({
    components: { ToggleSwitch },
    template: '<ToggleSwitch v-bind="{ toggled: false, disabled: true }" style="max-width: 460px">' + label + '</ToggleSwitch>'
  }))
  .add('toggle switch on', () => ({
    components: { ToggleSwitch },
    template: '<ToggleSwitch v-bind="{ toggled: true }" style="max-width: 460px">' + label + '</ToggleSwitch>'
  }))
  .add('toggle switch on and disabled', () => ({
    components: { ToggleSwitch },
    template: '<ToggleSwitch v-bind="{ toggled: true, disabled: true }" style="max-width: 460px">' + label + '</ToggleSwitch>'
  }))
