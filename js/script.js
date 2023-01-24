//https://publicmessage-6cd2e-default-rtdb.europe-west1.firebasedatabase.app/
console.log('here?');
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"

import {getDatabase, ref, set, onValue, remove, push} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"

//import {getDatabase, set, get, update, remove, ref};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDN3KLCwiGoLwaqjF9Fbt86Nbs44PdpNLk",
  authDomain: "publicmessage-6cd2e.firebaseapp.com",
  databaseURL: "https://publicmessage-6cd2e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "publicmessage-6cd2e",
  storageBucket: "publicmessage-6cd2e.appspot.com",
  messagingSenderId: "1027313381765",
  appId: "1:1027313381765:web:fd6253aa3ab7eb99c454ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

var enterID = document.querySelector('#enterID');
var enterName = document.querySelector('#enterName');
var enterAge = document.querySelector('#enterAge');

var findID = document.querySelector('#findID');
var findName = document.querySelector('#findName');
var findAge = document.querySelector('#findAge');

//var insertBtn=document.getElementById("insert");

var  insertBtn = document.querySelector('#insert');
var updateBtn = document.querySelector('#update');
var removeBtn = document.querySelector('#remove');
var findBtn = document.querySelector('#find');
console.log('here?',insertBtn);



function InsertData() {
  console.log(enterAge.value);

  console.log(enterID.value);
set(ref(db, "People/" + enterID.value), {
  Name: enterName.value,
  ID: enterID.value,
  Age: enterAge.value
})
.then(()=>{

  alert("Date added sucessfully!")
})
.catch((error)=>{
  alert(error)
});
}


function FindData() {
  
  const dbref = ref(db);

  get(child(dbref, 'People/' + findID.value))
  .then((snapshot)=>{
    if (snapshot.exists()){
      findName.innerHTML = 'Name: ' + snapshot.val().Name;
      findAge.innerHTML = 'Age: ' + snapshot.val().Age;

    }else{

      alert('NO Data Found');
    }}  )
    .catch((error) =>{
      alert(error)
    })
}


function UpdateData() {
  update(ref(db, 'People/' + enterID.value), {
    Name: enterName.value,
    Age: enterAge.value

  } )
  .then(()=>{

    alert('Data updated successfully!');
  })

  .catch((error)=>{

    alert(error);
  });
}


function RemoveData() {

  remove(ref(db, 'People/' + enterID.value))
  .then(()=>{

    alert('Data removed sucessfully');
  })
  .catch((error)=>{

    alert('error');
  });
  
}
insertBtn.addEventListener('click', InsertData);

updateBtn.addEventListener('click', UpdateData);

removeBtn.addEventListener('click', RemoveData);

findBtn.addEventListener('click', FindData);

console.log('here?',insertBtn);
