
<script>
import gql from 'graphql-tag'
import ArticleList from '../components/ArticleList.vue'

export default {
  components: {
    ArticleList
  },
  apollo: {
    articles: gql`
      query getArticles {
        articles {
          id
          title
          imageUrl
          summary
          postedDate
          author {
            id
            name
          }
        }
      }
    `
  }
}
</script>

<template>
  <ArticleList
    v-if="!!articles"
    v-bind="{ articles }"
  >
    <template v-slot:heading>
      <h1
        data-test="home-heading"
        :class="$style.heading"
      >
        Recent Faker Articles
      </h1>
    </template>
  </ArticleList>
</template>

<style module>
.heading {
  composes: fontSize36 from "../assets/typography.css";
  margin: 0 0 24px;
  text-align: center;
  color: var(--color-secondary);
  text-shadow: var(--color-secondary-accent) 1px 0 1px;
}
</style>