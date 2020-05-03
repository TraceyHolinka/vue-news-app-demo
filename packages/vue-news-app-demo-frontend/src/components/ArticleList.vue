<script>
import { getters, mutations } from '../store.js';
import ArticleCard from './ArticleCard'
import ListContainer from './ListContainer'
import ToggleSwitch from './ToggleSwitch'

export default {
  components: {
    ArticleCard,
    ListContainer,
    ToggleSwitch
  },
  props: {
    articles: { type: Array, required: true },
    title: { type: String, required: false, default: null },
    showImageLead: { type: Boolean, required: false, default: true },
  },
    computed: {
    ...getters
  },
    methods: {
    ...mutations,
    toggleSwitch() {
      this.setToggled(!this.toggled)
    }
  }
}
</script>

<template>
  <div>
    <header v-if="this.$slots.heading">
      <slot name="heading" />
    </header>
    <div :class="$style.toggle">
      <ToggleSwitch
        v-bind="{ toggled }"
        @click="toggleSwitch"
      >
        Toggle Images
      </ToggleSwitch>
    </div>
    <ListContainer>
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        v-bind="{ article, showImageLead: !toggled }"
      />
    </ListContainer>
  </div>
</template>

<style module>
  .toggle {
    display: flex;
    justify-content: flex-end;
  }
</style>