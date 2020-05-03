<template>
  <div :class="$style.list">
    <section>
      <slot />
    </section>
  </div>
</template>

<style module>
.list {
  padding: 0 16px;
}
@media (min-width: 768px) {
  .list {
    padding: 0;
  }
}
</style>
