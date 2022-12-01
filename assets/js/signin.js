const signInBtn = document.getElementById("signIn");  
const signUpBtn = document.getElementById("signUp");  
const fistForm = document.getElementById("form1");  
const secondForm = document.getElementById("form2");  
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {  
    container.classList.remove("right-panel-active");  
});

signUpBtn.addEventListener("click", () => {  
    container.classList.add("right-panel-active");  
});

fistForm.addEventListener("submit", (e) => e.preventDefault());  
secondForm.addEventListener("submit", (e) => e.preventDefault());

// Sign Up
function saveDataSignUp() {
    let name, email, psw;

    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    psw=document.getElementById("psw").value;

    let user_records = new Array();

    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_records.some((v)=>{return v.email==email})) {
        alert("duplicate data");
    } else {
        user_records.push({
            "name":name,
            "email":email,
            "psw":psw
        })
        localStorage.setItem("users",JSON.stringify(user_records));
    }
}

// Sign In
let name = localStorage.getItem('name') ? localStorage.getItem('name') : ''
        console.log(name);

if(name!='')
{
    alert('Please visit profile');
    window.location.href="admin/index.html";
}

function saveDataSignIn() {
    let email, psw;

    email=document.getElementById("email").value;

    psw=document.getElementById("psw").value;

    let user_records=new Array();

    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
    {
        alert("Login Pass");
        let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
        localStorage.setItem('name',current_user.name);
        localStorage.setItem('email',current_user.email);
        window.location.href="admin/index.html"
    } else {
        alert('Login Fail');
    }
}