<script>
  export default {
    props: {
      disabled: { type: Boolean, required: false, default: false },
      toggled: { type: Boolean, required: true }
    }
  }
</script>

<template>
  <label
    data-test="toggle-label"
    :class="[$style.label, { [$style.disabled]: disabled }]"
  >
    <slot />
    <span :class="$style.wrapper">
      <input
        :class="[$style.input, { [$style.disabled]: disabled }, { [$style.toggled]: toggled }]"
        :checked="toggled"
        :disabled="disabled"
        type="checkbox"
        v-on="$listeners"
        @input="$emit('input', $event.target.checked)"
      >
      <span
        :class="[$style.toggle, { [$style.disabled]: disabled }, { [$style.toggled]: toggled }]"
        aria-hidden="true"
      >
        <span
          :class="[$style.switch, { [$style.disabled]: disabled }, { [$style.toggled]: toggled }]"
          aria-hidden="true"
        />
      </span>
    </span>
  </label>
</template>

<style module>
  @import url(../assets/typography.css);

  .label {
    align-items: center;
    display: flex;
    color: var(--color-primary);
    font-family: 'OpenSans', arial, sans-serif;
    font-size: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    text-rendering: optimizeLegibility;
  }
  .label.disabled{
    color: #c5cacd;
  }
  .wrapper,
  .input,
  .toggle,
  .switch {
    display: block;
  }
  .wrapper {
    margin: 0 0 0 6px;
  }
  .input,
  .toggle {
    width: 40px;
    height: 20px;
  }
  .input {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 0;
    padding: 0;
    opacity: 0;
  }
  .switch,
  .toggle {
    box-sizing: border-box;
    transition: all .25s ease-in-out 0s;
  }
  .toggle {
    position: relative;
    background: #9ea3a6;
    border: 1px solid #777c7f;
    border-radius: 10px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    margin: -23px 0 0;
  }
  .switch,
  .switch::after {
    border-radius: 50%;
  }
  .switch {
    position: absolute;
    left: -1px;
    top: -1px;
    background: #edf2f5;
    border: 1px solid #c5cacd;
    height: 20px;
    width: 20px;
    content: '';
  }
  .toggle.toggled,
  .switch::after {
    background: #777c7f;
  }
  .switch.toggled {
    bottom: -1px;
    left: unset;
    top: unset;
    right: -1px;
  }
  .switch::after {
    position: absolute;
    left: 6px;
    top: 6px;
    height: 6px;
    width: 6px;
    content: '';
  }
  .disabled {
    cursor: not-allowed;
  }
  .toggle.disabled {
    background-color: #edf2f5;
    border: 1px solid #c5cacd;
    box-shadow: none;
  }
  .switch.disabled::after {
    background: #c5cacd;
  }
</style>
