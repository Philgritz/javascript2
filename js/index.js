console.log("Connected successfully!");

function buttonClicked() {
    var usernameCtrl = document.getElementById("username");
    usernameCtrl.value = users[1].username;
    var isadminCtrl = document.getElementById("isadmin");
    isadminCtrl.checked = users[1].isAdmin;  //is admin true, check will be true and box will be checked
}

function button2Clicked() {
    var inptCtrl = document.getElementById("input"); // get access to input control
    var userInput = inptCtrl.value;            //get value from box store in variable
    console.log("User input is", userInput);  //print to console what user keys in, (retrieve data from box)
}

var users = [
    {
        "id": 1,
        "username": "adm",
        "password": "adm",
        "firstname": "Normal",
        "lastname": "Admin",
        "phone": "513-555-1212",
        "email": "help@admin.com",
        "isReviewer": true,
        "isAdmin": true
    },
    {
        "id": 2,
        "username": "user",
        "password": "user",
        "firstname": "Normal",
        "lastname": "User",
        "phone": "",
        "email": "",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 3,
        "username": "sa",
        "password": "sa",
        "firstname": "System",
        "lastname": "Admin",
        "phone": "",
        "email": "",
        "isReviewer": true,
        "isAdmin": true
    }
]
// Collapse









// Message dotnet_2019_08_19_apprenti


// Thread
// dotnet_2019_08_19_apprenti

