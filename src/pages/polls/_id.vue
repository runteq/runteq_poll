<template>
  <Result
    v-if="isCompleted || isExpired"
    :poll="poll"
    :poll-options="pollOptions"
  />
  <Poll
    v-else
    :poll="poll"
    :poll-options="pollOptions"
    @vote="vote((checkedOptions = $event))"
  />
</template>

<script>
import { db } from '@/plugins/firebase'
import firebase from 'firebase'
import Poll from '@/components/polls/Poll'
import Result from '@/components/polls/Result'

export default {
  components: {
    Poll,
    Result,
  },
  data() {
    return {
      poll: '',
      pollOptions: [],
      checkedOptions: [],
      isCompleted: false,
    }
  },
  firestore() {
    return {
      poll: db.collection('polls').doc(this.$route.params.id),
      pollOptions: db
        .collection('polls')
        .doc(this.$route.params.id)
        .collection('options')
        .orderBy('number', 'asc'),
    }
  },
  computed: {
    isExpired() {
      // 投票の期日をチェック。日付の取得はもっと楽にやりたい
      const d = new Date()
      const year = d.getFullYear()
      const month = d.getMonth() + 1
      const day = d.getDate()
      const today = `${year}/${month}/${day}`

      if (today >= this.poll.deadlineDate) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    async vote() {
      const increment = firebase.firestore.FieldValue.increment(1)
      for (const i in this.checkedOptions) {
        const checkedOptionId = this.checkedOptions[i]
        const pollRef = await db
          .collection('polls')
          .doc(this.$route.params.id)
          .collection('options')
          .doc(checkedOptionId)
        pollRef.update({
          votes: increment,
        })
      }
      this.complete()
    },
    complete() {
      this.isCompleted = true
    },
  },
}
</script>
