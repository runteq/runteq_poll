<template>
  <v-list class="mx-auto col-md-12" max-width="640">
    <h1 style="font-size: 24px; font-weight: bold">
      {{ poll.description }}
    </h1>
    <v-subheader>{{ poll.title }}</v-subheader>

    <v-list-item-group
      v-model="checkOptions"
      child-radio-option
      active-class="deep-purple--text text--accent-4"
      multiple
    >
      <v-card
        v-for="option in pollOptions"
        :key="option.id"
        class="mt-4"
        elevation="0"
        outlined
      >
        <v-list-item :value="option.id">
          <template #default="{ active }">
            <v-list-item-action v-if="pollLimit !== 1">
              <v-checkbox
                :input-value="active"
                color="deep-purple accent-4"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ option.text }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-card>
    </v-list-item-group>
    <v-row>
      <v-col class="mt-8" style="text-align: center">
        <v-btn
          :disabled="checkOptions.length !== pollLimit"
          depressed
          width="160"
          color="blue-grey lighten-5"
          x-large
          @click="vote()"
        >
          <strong style="color: #6200ea">投票する</strong>
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
  data() {
    return {
      // ここは要検討
      checkOptions: [],
    }
  },
  computed: {
    pollLimit() {
      console.log(this.poll.pollLimit)
      return this.poll.pollLimit
    },
  },
  methods: {
    vote() {
      this.$emit('vote', this.checkOptions)
      this.checkOptions = []
    },
    cancel() {
      this.checkOptions = []
    },
  },
}
</script>
