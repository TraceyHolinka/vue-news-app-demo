<script>
import Avatar from './Avatar'

export default {
  components: {
    Avatar
  },
  props: {
    author: { type: Object, required: true },
    showAvatar: { type: Boolean, default: true }
  }
}
</script>

<template>
  <section :class="$style.authorBio">
    <header>
      <h1 :class="$style.heading">
        <router-link :to="{ name: 'author', params: { id: author.id } }">
          {{ author.name }}
        </router-link>
      </h1>
    </header>
    <div :class="$style.avatar">
      <Avatar v-if="!!showAvatar" />
    </div>
    <p :class="$style.bio">
      {{ author.bio }}
    </p>
  </section>
</template>

<style module>
  .authorBio {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .heading {
    composes: fontSize24 from "../assets/typography.css";
    margin: 0 0 24px;
    text-align: center;
  }
  .avatar {
    margin-bottom: 16px;
  }
  .bio {
    composes: fontSize16 from "../assets/typography.css";
    margin: 0 0 24px;
  }
</style>
