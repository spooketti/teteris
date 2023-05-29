let theirs = document.getElementById("theirs")
let buttonHolder = document.getElementById("buttonHolder")
let serverListings = document.getElementById("serverListings")
let serverList = document.getElementById("serverList")
let darkModal = document.getElementById("darkModal")
let createServerMenu = document.getElementById("createServerMenu")
let signupMenu = document.getElementById("signupMenu")
let dark = document.getElementById("dark")
let crazy = "genius"
//temporary: DON'T LEAVE THIS IN

localStorage.userId = Math.random()

const firebaseConfig   = {
    apiKey: "AIzaSyDq-4TBRjsYTvfbPq8T3mI0eehX_rxdI2w",
    authDomain: "tetris-cd808.firebaseapp.com",
    databaseURL: "https://tetris-cd808-default-rtdb.firebaseio.com",
    projectId: "tetris-cd808",
    storageBucket: "tetris-cd808.appspot.com",
    messagingSenderId: "475907655959",
    appId: "1:475907655959:web:7680a413648327db9dcf52",
    measurementId: "G-37D09RWTF0"
  };

  firebase.initializeApp(firebaseConfig);
let activeUser

const provide = new firebase.auth.GoogleAuthProvider();
function signInWithGoogle() 
  {
    if(firebase.auth().currentUser != null)
    {
      signupMenu.style.display = "none"
dark.style.display = "none"
firebase.auth().currentUser.updateProfile({displayName: document.getElementById("signUpUserName").value})
      return;
    }
    firebase.auth()
    .signInWithPopup(provide)
    .then((result) => {

    })
    .catch((error) =>
    {
      console.log(error)
    })
  }

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
signupMenu.style.display = "block"
dark.style.display = "block"
} //consider using return here to cut the else
else
{
  signupMenu.style.display = "block"
dark.style.display = "block"
document.getElementById("signUpHeader").innerText = "sorry but this is required everytime you load up this website because of some nerds who make website audio hard"
document.getElementById("signUpUserName").value = firebase.auth().currentUser.displayName
}

});


const user = firebase.auth().currentUser;

const db = firebase.database();
const servers = db.ref("Servers/")
let currentServer = null;

document.addEventListener("keydown", function(e) 
{
    if(e.code === "Space")
    {
        console.log("troll")
    }
})

function createServer()
{
    darkModal.style.display = "block";
    createServerMenu.style.display = "block"
}

function closeServerMenu()
{
  darkModal.style.display = "none";
    createServerMenu.style.display = "none"
    document.getElementById("createAServerNameInput").value = null;
}

function createServerBackend()
{
  buttonHolder.style.display="none"
  let serverName = document.getElementById("createAServerNameInput").value
  closeServerMenu()
  serverId = Date.now()
  let host = firebase.auth().currseUser.uid
  let id = serverId
  currentServer = serverId
  db.ref("Servers/" + serverId).set({
      host,
      serverName,
      id
    });
    showServers()
}

function showServers()
{
serverList.style.display = "block"
buttonHolder.style.display="none"
}

function deleteServer()
{
  db.ref("Servers/" + currentServer).remove()

}

servers.on("child_removed", function(snapshot)
{
  //kill me kill me kill me I AHTE SERVER CODE I HATE SERVER DATA WHY !!!!
    let content = snapshot.val()
    let DOMElementToRemove = document.getElementById(content.id)
    DOMElementToRemove.remove()
})




servers.on("child_added", function(snapshot)
{
    let content = snapshot.val()
    let newServer = document.createElement("div")
    newServer.classList.add("serverChoice")
    newServer.classList.add("soundSelect")
    newServer.id = content.id

    let newServerName = document.createElement("span")
    newServerName.classList.add("serverName")
    newServerName.innerText = content.serverName
    //console.log(content)
    serverList.appendChild(newServer)
    newServer.appendChild(newServerName)
})



//T

