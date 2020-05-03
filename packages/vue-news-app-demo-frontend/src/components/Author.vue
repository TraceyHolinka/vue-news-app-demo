<script>
import ArticleList from './ArticleList'
import AuthorBio from './AuthorBio'


export default {
  components: {
    ArticleList,
    AuthorBio
  },
  props: {
    author: { type: Object, required: true },
    showImageLead: { type: Boolean, required: false, default: true }
  }
}
</script>

<template>
  <div>
    <AuthorBio v-bind="{author}" />
    <ArticleList
      v-if="!!author.articles"
      v-bind="{ articles: author.articles }"
    />
  </div>
</template>

<style module>
    .author {
      margin: 0 16px;
      @media (min-width: 768px) {
        margin: 0;
      }
    }
    .card {
      margin: 16px 0;
    }
</style>
