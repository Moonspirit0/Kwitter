var firebaseConfig = {
    apiKey: "AIzaSyD466l5i9FPHhAywTv434uiBgTUwLAK6yI",
    authDomain: "kwitter-85e60.firebaseapp.com",
    databaseURL: "https://kwitter-85e60-default-rtdb.firebaseio.com",
    projectId: "kwitter-85e60",
    storageBucket: "kwitter-85e60.appspot.com",
    messagingSenderId: "750096594832",
    appId: "1:750096594832:web:4d91b67f01f9abc1a4a515"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}
