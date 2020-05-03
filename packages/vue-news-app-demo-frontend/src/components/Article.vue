<script>
import { apDate } from '../util'
export default {
  props: {
    article: { type: Object, required: true }
  },
  methods: {
    apDate(date) {
      return apDate(date)
    }
  }
}
</script>

<template>
  <article :class="$style.article">
    <header :class="$style.header">
      <h1 :class="$style.headline">
        {{ article.title }}
      </h1>
      <p
        v-if="!!article.author.name"
        :class="$style.author"
      >
        By
        <router-link :to="{ name: 'author', params: { authorId: article.author.id } }">
          {{ article.author.name }}
        </router-link>
      </p>
      <p
        v-if="!!article.postedDate"
        :class="$style.date"
      >
        {{ apDate(article.postedDate) }}
      </p>
    </header>
    <img
      v-if="article.imageUrl"
      :src="article.imageUrl"
      :class="$style.imageLead"
    >
    <section
      :class="$style.body"
      v-html="article.body"
    />
  </article>
</template>

<style module>
  .article {
    margin: 0 16px 48px;
    @media (min-width: 768px) {
      margin: 0 0 48px;
    }
  }
  .header {
    margin-bottom: 24px;
  }
  .headline {
    composes: fontSize24 from "../assets/typography.css";
    margin: 0 0 20px;
    text-align: center;
    font-weight: bold;
    color: var(--color-primary-accent);
  }
  .author {
    margin: 0 0 6px;
    color: var(--color-link);
  }
  .date {
    margin: 0 0 16px;
  }
  .imageLead {
    width: 100%;
    margin: 0 0 24px 0;
    border-radius: 25px;
  }
  /*  
    CSS Modules can't be directly applied to the elements in the article body. There are a few ways to deal with this:
    1) Add a second style tag that is not CSS Modules and manually scopped to the body with a class.
    2) Add it to CSS Modules as done here hooking it on to the article body class. However, composition is only allowed
    when selector is single so compose will not work in this case.
    3) When there are lots of styles it make sense from a maintainability perspective to make the article body a separate
    component that can be CSS Modules or not.
    4) Note that PostCSS (or SASS) can be used with CSS Modules.
 */
  .body {
    & h2 {
      margin: 24px 0 16px;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.32px;
      font-weight: bold;
    }
    & h3,
    & p {
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0;
    }
    & h3 {
      margin: 16px 0;
      font-weight: bold;
    }
    & p {
      margin: 0 0 16px;
    }
  }
</style>
