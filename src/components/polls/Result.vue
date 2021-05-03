<template>
  <v-list class="mx-auto col-md-12" max-width="640">
    <h1 style="font-size: 24px; font-weight: bold">{{ poll.title }} (結果)</h1>
    <span class="text--primary">{{ poll.description }}</span>

    <v-row v-for="option in pollOptions" :key="option.id" class="mt-2">
      <v-col class="mt-4" cols="12" sm="12" md="12">
        <v-progress-linear
          :value="Math.round((option.votes / totalVotes) * 100)"
          rounded
          color="deep-purple accent-4"
          height="32"
        >
          <v-col cols="9" sm="9" md="9">
            <span class="title ml-2" style="color: #fff">{{
              option.text
            }}</span>
          </v-col>
          <v-col cols="3" sm="3" md="3" style="text-align: right">
            <span class="title mr-2" style="color: #fff"
              >{{ Math.round((option.votes / totalVotes) * 100) }}%</span
            >
          </v-col>
        </v-progress-linear>
      </v-col>
    </v-row>
    <div class="mt-2 ml-2">
      <span class="title" style="color: #6200ea">{{ totalVotes }}票</span>
    </div>
    <v-row>
      <v-col class="mt-4" style="text-align: center">
        <v-btn depressed color="blue-grey lighten-5" x-large @click="back()">
          <strong style="color: #6200ea">投票一覧ページに戻る</strong>
        </v-btn>
      </v-col>
    </v-row>
  </v-list>
</template>

<script>
export default {
  props: {
    poll: {
      type: [Object, String],
      required: true,
    },
    pollOptions: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalVotes() {
      return this.pollOptions.reduce((p, x) => p + x.votes, 0)
    },
  },
  methods: {
    back() {
      this.$router.push('/')
    },
  },
}
</script>
