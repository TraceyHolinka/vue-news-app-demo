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
    showAvatar: { type: Boolean, required: false },
    toggled: { type: Boolean, default: false}
  }
}
</script>

<template>
  <ListContainer>
    <AuthorBio
      v-for="author in authors"
      :key="author.id"
      :class="$style.item"
      v-bind="{ author, showAvatar}"
    />
  </ListContainer>
</template>

<style module>
  .item {
    margin: 0 0 36px;
  }
</style>
