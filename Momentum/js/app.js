const loginForm=document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input")

function onLoginSubmit(event){
    event.preventDefault()
    const username=loginInput.value//innerText가 아니라 value
}

//input과 button있는 form은 submit
loginForm.addEventListener("submit",onLoginSubmit)