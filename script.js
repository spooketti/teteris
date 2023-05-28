let theirs = document.getElementById("theirs")
let buttonHolder = document.getElementById("buttonHolder")
let serverListings = document.getElementById("serverListings")
let serverList = document.getElementById("serverList")
let darkModal = document.getElementById("darkModal")
let createServerMenu = document.getElementById("createServerMenu")
//temporary: DON'T LEAVE THIS IN

localStorage.userId = Math.random()

const firebaseConfig = {
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
  let host = localStorage.userId
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





//const fetchChat = db.ref("bruh/");

// fetchChat.on("child_changed", function(snapshot) {
//   const messages = snapshot.val();
//   theirs.innerText = messages.cock


   /*let today = new Date(messages.timestamp);
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
  
 let time =  today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  today = mm + '/' + dd + '/' + yyyy + " at " + time;
  
  let messageDiv = document.createElement("div") //#Chat div
  chat.appendChild(messageDiv)
  
  let pfp = document.createElement("img")
  pfp.src = messages.pfp
  pfp.className = "chatProfilePic"
  messageDiv.appendChild(pfp) //#Chat div img
  
  let messageContent = document.createElement("div") //Chat div div
  messageDiv.appendChild(messageContent)
  
  let userNameHeader = document.createElement("p") //Chat div div p
  userNameHeader.innerHTML = "<b>" +  messages.username + "</b>" + " " + today
  messageContent.appendChild(userNameHeader)

 // messageContent.appendChild(document.createElement("br"))
  let message = document.createElement("span") //Chat div div span


  if(validateURL(messages.message))
  {
    message = document.createElement("a")
    message.href = messages.message
    message.className = "chatlink"
    validateIMG(messages.message,message)
  }
  
  
  
  message.innerText = messages.message 
  messageContent.appendChild(message)

  
  chat.scrollTop = chat.scrollHeight;

  if(!isWebsiteFocus && hasInteractedWithDOM){
  notifSound.play()
  console.log(isWebsiteFocus + "webfoc")
  console.log(hasInteractedWithDOM + "domint")
  }
*/
  
  
//});

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

