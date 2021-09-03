import Author from '@th/frontend/src/components/Author.vue'
import Authors from '@th/frontend/src/components/Authors.vue'
import AuthorBio from '@th/frontend/src/components/AuthorBio.vue'
import Image from '../assets/animals1.jpg'
import Avatar from '../assets/avatar.png'
import * as faker from './faker'

const article = {
  imageUrl: Image,
  postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
  title: 'Headline for Faker Article',
  summary:  faker.sentences10,
}

const author = {
  name: 'Faker Author',
  avatarUrl: Avatar,
  bio: faker.sentences15,
  articles: [1, 2].map(x => ({ ...article, id: x }))
}

export default { title: 'Authors'}

export const CardDefault = () => ({
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
