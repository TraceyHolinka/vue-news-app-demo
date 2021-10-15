import Author from '@th/frontend/src/components/Author.vue'
import Authors from '@th/frontend/src/components/Authors.vue'
import AuthorBio from '@th/frontend/src/components/AuthorBio.vue'
import {articles, author, authors} from './data'
import ArticleList from "@th/frontend/src/components/ArticleList";


export default {
  title: 'Authors'
}

export const Card = (args) => ({
  title: 'Author Card',
  components: { AuthorBio },
  props: {
    author: {
      default: () => author,
    },
    ...args
  },
  template: '<AuthorBio v-bind="{ author, showAvatar }" />'
})

Card.args = {
  showAvatar: true
}

export const List = () => ({
  title: 'Author List',
  components: { Authors },
  props: {
    authors: {
      default: () => authors,
    }
  },
  template: '<Authors v-bind="{ authors }" />'
})

export const Page = (args) => ({
  title: 'Author Page',
  components: { Author },
  props: {
    author: {
      default: () => author,
    },
    ...args
  },
  template: '<Author v-bind="{ author, showImageLead }" />'
})

Page.args = {
  showImageLead: false
}