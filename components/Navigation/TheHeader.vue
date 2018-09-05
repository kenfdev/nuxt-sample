<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <nuxt-link class="navbar-brand"
                   to="/">Brand</nuxt-link>
      </div>

      <div class="collapse navbar-collapse"
           id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
            <p class="navbar-text">Page Title: {{ pageTitle }}</p>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <nuxt-link to="/collections">Link</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    pageTitle() {
      return this.$store.getters.pageTitle;
    },
  },
};
</script>


<style scoped>
</style>
