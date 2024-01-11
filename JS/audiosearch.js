let audioURL1 = "http://localhost:3000/audio";

let ress;
let searchBooks2 = async () => {
    ress = await fetch(audioURL1);
    let books = await ress.json();
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var matchingBooks = books.filter(function (book) {
        return book.title.toLowerCase().includes(searchTerm);
    });

    var bookListElement = document.getElementById("bookList");
    bookListElement.innerHTML = "";
    matchingBooks.forEach(function (book) {
        var matchingTitle1 = document.createElement("p");
        var matchingTitle = document.createElement("a");
        matchingTitle.textContent = book.title;
        matchingTitle1.appendChild(matchingTitle);
        bookListElement.appendChild(matchingTitle1);
        matchingTitle.href="/HTML/Audiosearch.html?book="+book.title;
    });
}