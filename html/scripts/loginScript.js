function press() {
    if ((localStorage.getItem(document.getElementById("autoName").value)) !== null) {
        if ((localStorage.getItem(document.getElementById("autoName").valueOf().value) === document.getElementById("autoName").value)) {
            document.location.href = "indexReg.html";
        }
    } else {
        alert("Неправильный логин/пароль")
    }
}
localStorage.setItem('user', 'user')
localStorage.setItem('post', '')