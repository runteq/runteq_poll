<template>
  <div>
    <h1 class="title mb-4" style="color: #6200ea">議題一覧</h1>
    <v-row>
      <v-col v-for="poll in polls" :key="poll.id" cols="auto">
        <v-card width="320" height="128">
          <nuxt-link :to="{ name: 'polls-id', params: { id: poll.id } }">
            <v-card-text>
              <p class="title text--primary" style="font-weight: bold">
                {{ poll.title }}
              </p>
              <p class="text--primary">{{ poll.description }}</p>
            </v-card-text>
          </nuxt-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'

export default {
  data() {
    return {
      polls: [],
    }
  },
  firestore() {
    return {
      polls: db.collection('polls'),
    }
  },
  methods: {},
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
