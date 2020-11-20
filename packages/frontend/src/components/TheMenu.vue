<script>
export default {
  props: {
    menu: { type: Array, required: true },
    close: { type: Function, required: true }
  }
}
</script>

<template>
  <transition name="hamburgerMenu">
    <div
      v-click-outside="close"
      :class="$style.menu"
    >
      <div 
        :class="$style.closeIcon"
        @click="close"
      >
        <svg
          :class="$style.close"
          viewBox="0 0 32 32"
        >
          <path d="M25.71 7.71l-1.42-1.42-8.29 8.3-8.29-8.3-1.42 1.42 8.3 8.29-8.3 8.29 1.42 1.42 8.29-8.3 8.29 8.3 1.42-1.42-8.3-8.29 8.3-8.29z" />
        </svg>
      </div>
      <nav :class="$style.nav">
        <ul
          v-if="!!menu"
          :class="$style.list"
        >
          <li
            v-for="item in menu"
            :key="item.id"
            :class="$style.item"
          >
            <router-link
              class="menu-link"
              :to="{ name: item.name }" 
              @click.native="close"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<style module>
.menu {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 24px 12px;
  background: var(--color-primary);
}
.closeIcon {
  position: absolute;
  z-index: 1;
  right: 30px;
  width: 24px;
  height: 24px;
  fill: var(--color-dark);
  cursor: pointer;
}
.close {
  fill: var(--color-dark);
}
.nav {
  composes: fontSize20 from "../assets/typography.css";
  color: var(--color-dark);
  font-weight: bold;
}
.list {
  margin: 0;
  padding: 0;
}
.item {
  margin: 0 0 12px;
  padding: 6px 0;
}
</style>

<style>
/*  
  Vue writes these class on the fly so currently there is no way to use CSS Modules.
*/

.hamburgerMenu-link.router-link-exact-active {
  color: var(--sansa-rose)
}
.hamburgerMenu-leave-active,
.hamburgerMenu-enter-active {
  transition: 0.35s;
}
.hamburgerMenu-enter {
  transform: translate(-100%, 0);
  opacity: 0;
}
.hamburgerMenu-leave-to {
  transform: translate(-100%, 0);
  opacity: 0;
}
</style>