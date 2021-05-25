let post = localStorage.getItem('post')
let app = document.getElementById("info-c");
let title = document.createElement('div');
title.className = 'title'
title.innerHTML = post

app.insertBefore(title, app.firstChild)

function delete1(){
    app.removeChild(app.firstChild)
}

