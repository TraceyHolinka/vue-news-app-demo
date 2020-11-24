import Article from '../../frontend/src/components/Article.vue'
import ArticleCard from '../../frontend/src/components/ArticleCard.vue'
import ArticleList from '../../frontend/src/components/ArticleList.vue'
import Image from './assets/nature3.jpg'
import * as faker from './faker'

const article = {
  author: {
    id: 0,
    name: 'Faker Author'
  },
  id: 0,
  imageUrl: Image,
  postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
  summary:  faker.sentences10,
  title: faker.words6
}

export default { title: 'Articles'}

export const CardDefault = () => ({
  components: { ArticleCard },
  template: `<ArticleCard v-bind="{ article }" />`,
  props: {
    article: {
      default: () => article,
    }
  }
})

export const CardWithoutAuthor = () => ({
  components: { ArticleCard },
  template: `<ArticleCard v-bind="{ article, showAuthor: false }" />`,
  props: {
    article: {
      default: () => article,
    }
  }
})

export const AritcleDefault = () => ({
  components: { Article },
  template: `<Article v-bind="{ article }" />`,
  props: {
    article: {
      default: () => ({
        ...article,
        body:
        `<h2>${faker.words9}</h2><p>${faker.sentences5}</p><p>${faker.sentences15}</p><h3>${faker.words9}</h3><p>${faker.sentences5}</p><p>${faker.sentences15}</p><p>${faker.sentences10}</p>`,
      }),
    }
  }
})

export const ListDefault = () => ({
  components: { ArticleList },
  template: `<ArticleList v-bind="{ articles, title }" />`,
  props: {
    default: () => ({
      articles: [1, 2, 3 ].map(x => ({ ...article, id: x })),
      title: 'Recent Faker News'
    })
  }
})
