import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
}

// 二重に初期化が行われないようにする
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const db = firebase.firestore()
export default firebase
