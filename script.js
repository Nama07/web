function login () {

    const users = ["test@c.cz.heslo120",
     "testa@c.cz.heslo120",
      "testb@c.cz.heslo120"
    ]

    
    let useremail, userpassword

    useremail = document.getElementById("EmailIn").value
    userpassword = document.getElementById("passIn").value

    let userlogin = useremail + "." + userpassword

    let errors = 0

    console.log(userlogin);

   for(let i = 0; i < users.length; i++) {
        if(userLogin === users[i]) {
            alert("Úspěšně přihlášen!")
            break
        } else {
            errors++ 
            alert("Špatně zadané heslo nebo email!")
        }
    }
    
    if(errors === users.length) alert
        
    
   


}