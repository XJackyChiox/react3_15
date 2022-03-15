import {initializeApp} from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDnN54vocdDuU0E1RO57cuANvv6FJDXq4c",
    authDomain: "test1-1a43d.firebaseapp.com",
    databaseURL: "https://test1-1a43d-default-rtdb.firebaseio.com",
    projectId: "test1-1a43d",
    storageBucket: "test1-1a43d.appspot.com",
    messagingSenderId: "42424557691",
    appId: "1:42424557691:web:2bf1a5bc5d652ebb32c2de"
  };
   
  //init
  firebase.initializeApp(firebaseConfig);
  //init services
  const db = firebase.firestore()
//collection ref
  const colRef = collection(db, 'memos');
//get collection data
getDocs(colRef)
  .then((snapshot)=>{
     let memos = []
     snapshot.docs.foreach((doc) => {
       memos.push({ ...doc.data(), id: doc.id})
     })
     console.log(memos)
  })

  ReactDOM.render(document.getElementById('root'));