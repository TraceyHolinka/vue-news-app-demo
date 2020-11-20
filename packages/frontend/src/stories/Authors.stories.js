import { storiesOf } from '@storybook/vue'
import Author from '../components/Author.vue'
import Authors from '../components/Authors.vue'
import AuthorBio from '../components/AuthorBio.vue'
import Image from './assets/animals1.jpg'
import Avatar from './assets/avatar.png'
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

storiesOf('Authors', module)
.add('Author Bio',() => ({
    components: { AuthorBio },
    template: '<AuthorBio v-bind="{ author }" />',
    data() {
      return {
        author
      }
    }
  }),
  { notes: 'Used in Author View and Authors View.' }
)
.add('Author Page', () => ({
  components: { Author },
  template: '<Author v-bind="{ author }" />',
  data() {
    return {
      author
    }
  }
}))
.add('Author List', () => ({
  components: { Authors },
  template: '<Authors v-bind="{ authors }" />',
  data() {
    return {
      authors: [1, 2, 3 ].map(x => ({ ...author, id: x }))

    }
  }
}))
