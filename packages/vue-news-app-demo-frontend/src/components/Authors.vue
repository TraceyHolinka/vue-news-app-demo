<script>
import ListContainer from './ListContainer'
import AuthorBio from './AuthorBio'

export default {
  components: {
    AuthorBio,
    ListContainer

  },
  props: {
    authors: { type: Array, required: true },
    toggled: { type: Boolean, required: false, default: false}
  }
}
</script>

<template>
  <ListContainer>
    <template v-slot>
      <AuthorBio
        v-for="author in authors"
        :key="author.id"
        :class="$style.item"
        v-bind="{ author}"
      />
    </template>
  </ListContainer>
</template>

<style module>
  .item {
    margin: 0 0 36px;
  }
</style>
