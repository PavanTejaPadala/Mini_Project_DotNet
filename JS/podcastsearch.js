let audioURL1 = "http://localhost:3000/podcasts";

let ress;
let searchBooks1 = async () => {
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
        matchingTitle.href="/HTML/podcastsearch.html?book="+book.title;
        
    });
}
