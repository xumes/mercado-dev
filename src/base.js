const config = {
    apiKey: "AIzaSyClF-45_XxFBrIP4nS4jSw8sDGpUkNFtZU",
    authDomain: "mercadodev-258bd.firebaseapp.com",
    databaseURL: "https://mercadodev-258bd.firebaseio.com",
    projectId: "mercadodev-258bd",
    storageBucket: "",
    messagingSenderId: "226652374294"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export default base