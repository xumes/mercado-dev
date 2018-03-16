const config = {
    apiKey: "AIzaSyClF-45_XxFBrIP4nS4jSw8sDGpUkNFtZU",
    authDomain: "mercadodev-258bd.firebaseapp.com",
    databaseURL: "https://mercadodev-258bd.firebaseio.com",
    projectId: "mercadodev-258bd",
    storageBucket: "gs://mercadodev-258bd.appspot.com/",
    messagingSenderId: "226652374294"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()
  export default base