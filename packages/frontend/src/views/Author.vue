<script>
import gql from 'graphql-tag'
import Author from '../components/Author'

export default {
  components: {
    Author
  },
  data() {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  apollo: {
    author: {
      query: gql`
        query getAuthor($id: Int!) {
          author(id: $id) {
            id
            name
            avatarUrl
            bio
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
  <div>
    <Author
      v-if="!!author"
      v-bind="{ author, showImageLead: true }"
    />
  </div>
</template>
