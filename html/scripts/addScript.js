function addPost() {
    let description = document.getElementById("description1").value;
    let hashtag = document.getElementById("hashtag").value;
    let pict = document.getElementById("input-pict").files[0];
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(pict);
    img.height = 60;
    let post = '<div class="info-block">\n' +
        '                <div class="picture-with-description">\n' +
        '                    <img src="' + img.src +'" alt="gun1" width="25% ">\n' +
        '                    <div class="description">\n' +
        '                        <h2>Секира</h2>\n' +
        '                        <ul>\n' +
        '                            <li>user</li>\n' +
        '                            <li id="description">' + description + '</li>\n' +
        '                            <li>20.01.1658</li>\n' +
        '                            <li>' + hashtag + '</li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="button-box">\n' +
        '                    <input value="Лайк" onclick="" type="button">\n' +
        '                    <input value="Удалить" onclick="delete1()" type="button">\n' +
        '                    <input value="Редактировать" onclick="addPost()" type="button">\n' +
        '                </div>\n' +
        '            </div>'
    const sngTotal = post;
    localStorage.setItem('post', post + localStorage.getItem('post'))
    document.location.href = "indexReg.html";
}
