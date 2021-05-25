class Post {
    constructor(name, author, description, date, hashtag) {
        this.author = author;
        this.description = description;
        this.date = date;
        this.hashtag = hashtag;
        this._name = name;
    }

    createInnerPost() {
        return '<div class="info-block">\n' +
            '                <div class="picture-with-description">\n' +
            '                    <img src="../image/gun1.jpg" alt="gun1" width="25% ">\n' +
            '                    <div class="description">\n' +
            '                        <h2>' + this._name + '</h2>\n' +
            '                        <ul>\n' +
            '                            <li>Автор: ' + this.author + '</li>\n' +
            '                            <li>' + this.description + '</li>\n' +
            '                            <li>' + this.date + '</li>\n' +
            '                            <li>' + this.hashtag + '</li>\n' +
            '                        </ul>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="button-box">\n' +
            '                    <a href="#" class="button18" tabindex="0">Лайк</a>\n' +
            '                </div>\n' +
            '            </div>';
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

class PostList {
    constructor(posts) {
        this.posts = posts;
    }

    getPhotoPosts(skip, top, filterConfig = 1) {
        let arr = this.posts.slice(skip, top);
        if (filterConfig === 1) {
            arr.sort(function (p1, p2) {
                return p1.date - p2.date;
            });
        } else if (filterConfig === 2) {
            arr.sort(function (p1, p2) {
                return p1.author - p2.author;
            })
        }
        return new PostList(arr);
    }

    getPost(index) {
        return this.posts[index];
    }

    addPost(p) {
        this.posts.push(p);
    }

    removePost(id) {
        this.posts.splice(id, 1);
    }

    editPost(id, PostChange) {
        this.posts[id] = PostChange;
    }

    createInnerOfPostList() {
        let inner;
        for (let i = 0; i < this.posts.length; i++) {
            inner += this.posts[i].createInnerPost() + '\n';
        }
        return inner;
    }
}

PostList.prototype.toString = function postToString() {
    let info;
    this.posts.forEach(function (item, i, posts) {
        info += item.toString() + ' ';
    });
    return `${info}`;
};


Post.prototype.toString = function postToString() {
    return `${this.name}`;
};

let post1 = new Post('Privet', '1', '1', '1', '1');
localStorage.setItem('0', post1.createInnerPost());
for (let i = 0; i < 2; i++) {
    let temp = localStorage.getItem(i.toString())
}

let infoColumn = document.getElementById('info-column');
let domO1 = document.createElement('post0');
domO1.innerHTML =localStorage.getItem('0');



