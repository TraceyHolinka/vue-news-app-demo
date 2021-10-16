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
    showImageLead: { type: Boolean, default: true }
  }
}
</script>

<template>
  <div>
    <AuthorBio v-bind="{author}" />
    <ArticleList
      v-if="!!author.articles"
      v-bind="{ articles: author.articles, showImageLead }"
    />
  </div>
</template>
