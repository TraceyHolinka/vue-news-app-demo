import Author from '@th/frontend/src/components/Author.vue'
import Authors from '@th/frontend/src/components/Authors.vue'
import AuthorBio from '@th/frontend/src/components/AuthorBio.vue'
import {author} from './data'


export default {
  title: 'Authors'
}

export const Card = () => ({
  components: { AuthorBio },
  props: {
    author: {
      default: () => author,
    }
  },
  template: '<AuthorBio v-bind="{ author }" />'
})

export const AuthorPage = () => ({
  components: { Author },
  props: {
    author: {
      default: () => author,
    }
  },
  template: '<Author v-bind="{ author }" />'
})

export const AuthorList = () => ({
  components: { Authors },
  props: {
    authors: {
      default: () => [1, 2, 3 ].map(x => ({ ...author, id: x })),
    }
  },
  template: '<Authors v-bind="{ authors }" />'
})
