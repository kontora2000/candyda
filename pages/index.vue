<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        candyda
      </h1>
      <h2 class="subtitle">
        very coll website
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue'
import Logo from '~/components/Logo.vue'

export default ({
  components: {
    Logo
  }
})
</script>

<style></style>
