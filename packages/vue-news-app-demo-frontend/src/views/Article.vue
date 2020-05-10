
<script>
import gql from 'graphql-tag'
import Article from '../components/Article.vue'

export default {
  components: {
    Article
  },
  data() {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  apollo: {
    article: {
      query: gql`
        query getArticle($id: Int!) {
          article(id: $id) {
            id
            title
            imageUrl
            body
            postedDate
            author {
              id
              name
            }
          }
        }
      `,
      variables() {
        return {
          id: this.id
        }
      }
    }
  }
}
</script>

<template>
  <Article 
    v-if="!!article"
    v-bind="{ article }"
  />
</template>
