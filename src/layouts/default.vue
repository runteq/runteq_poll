<template>
  <v-app>
    <v-app-bar flat fixed app>
      <nuxt-link :to="{ name: 'index' }">
        <h2 style="color: #6200ea">RUNTEQ POLL</h2>
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span class="ml-2">runteq poll</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
