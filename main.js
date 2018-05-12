
var books = [];

const btn = document.getElementById('btn');

function addBook(e) {
    let author = document.getElementById("author");
    let title = document.getElementById("title");
    let pages = document.getElementById("pages");
    books.push({author:author.value, title:title.value, pages:pages.value});
    render(books);
}

function render(arr) {
    for(let i= 0; i>arr.length; i++) {
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');
        let para3 = document.createElement('p');

        para1.innerHTML = arr[i].author;
        para2.innerHTMl = arr[i].title;
        para3.innerHTML = arr[i].pages;

    let div = document.querySelector(`#panel[data-target="${i}"]`);
    div.style.display = "block";
    div.appendChild = para1;
    div.appendchild = para2;
    div.appendchild = para3;
    }
}


btn.addEventListener('click', addBook);