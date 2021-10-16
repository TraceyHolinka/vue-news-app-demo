import ArticleList from '@th/frontend/src/components/ArticleList.vue'
import Article from '@th/frontend/src/components/Article.vue'
import ArticleCard from '@th/frontend/src/components/ArticleCard.vue'
import {articles, article} from './data'

export default {
  title: 'Articles'
}

export const Card = (args) => ({
  title: 'Article Card',
  components: { ArticleCard },
  template: `<ArticleCard v-bind="{ article, showAuthor, showImageLead }" />`,
  props: {
    article: { default: article },
    ...args
  }
})

Card.args = {
  showAuthor: true,
  showImageLead: true
}

export const List = (args) => ({
  title: 'Article List',
  components: { ArticleList },
  template: `<ArticleList v-bind="{ articles, title, showImageLead }" />`,
    props: {
      articles: {default: articles},
      title: {default: 'Recent Faker News'},
      ...args
    }
})

List.args = {
  showImageLead: false
}

export const Page = () => ({
  components: { Article },
  template: `<Article v-bind="{ article }" />`,
  props: {
    article: {default: article,
    }
  }
})
