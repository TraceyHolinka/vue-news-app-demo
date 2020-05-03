<template functional>
  <footer :class="$style.footer">
    <p>Vue.js Demo by <a href="https://github.com/TraceyHolinka/">Tracey Holinka</a></p>
  </footer>
</template>

<style module>
  .footer {
    composes: fontBase from "../assets/typography.css";
    margin: 48px 16px 24px;
    font-weight: bold;

    @media (min-width: 768px) {
      margin: 48px 0 24px;

    }
  }
</style>
