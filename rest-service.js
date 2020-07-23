async function signUpData(){
    console.log("signing up")
    var name = document.getElementById("uname").value;
    var pwd = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    await fetch("http://127.0.0.1:8080/api/auth/signup", {
        method: 'POST',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": pwd,
            "phoneNumber": 9999888899,
            "role": ["user"],
            "username": name
        })
    })
        .then(res => res.text())
        .then(res => console.log(res))
        .then(console.log("registered!"))
        .then()
}

async function signInData(){
    console.log("hey")
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    await fetch("http://127.0.0.1:8080/api/auth/signin", {
        method: 'POST',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({
            "username": uname,
            "password": pwd
        })
    })
        .then(res => res.json())
        .then(res => localStorage.setItem("token", res.accessToken))
        .then(console.log("signed in!! token: ", localStorage.getItem("token")))
}
