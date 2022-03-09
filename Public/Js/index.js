/* eslint-disable no-undef */

const addMyBook = (Added_Date, cover, book_id) => fetch(`/addMyBook/${Added_Date}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
});

fetch('/getBook')
  .then((res) => res.json())
  .then((books) => {
    // eslint-disable-next-line no-console
    console.log(books);
    const bookContainer = document.querySelector('.books-cont');
    books.forEach((book) => {
      const bookdiv = document.createElement('div');
      bookdiv.classList.add('book');
      bookContainer.appendChild(bookdiv);
      const bookImg = document.createElement('img');
      bookImg.classList.add('book-img');
      bookImg.src = book.cover;
      bookdiv.appendChild(bookImg);
      const bookName = document.createElement('h4');
      bookName.classList.add('book-name');
      bookName.textContent = book.name;
      bookdiv.appendChild(bookName);
      const bookA = document.createElement('a');

      const author = document.createElement('p');
      author.textContent = 'Author: ';
      const authorData = document.createElement('span');
      authorData.textContent = book.author;
      author.appendChild(authorData);
      bookdiv.appendChild(author);

      const publisher = document.createElement('p');
      publisher.textContent = 'Author: ';
      const publisherData = document.createElement('span');
      publisherData.textContent = book.publisher;
      publisher.appendChild(publisherData);
      bookdiv.appendChild(publisher);

      const ISBN = document.createElement('p');
      ISBN.textContent = 'ISBN: ';
      const ISBNData = document.createElement('span');
      ISBNData.classList.add('ISBN');
      ISBNData.textContent = book.isbn;
      ISBN.appendChild(ISBNData);
      bookdiv.appendChild(ISBN);

      const relaseDate = document.createElement('p');
      relaseDate.textContent = 'Release Date: ';
      const releaseDateData = document.createElement('span');
      releaseDateData.textContent = book.year;
      relaseDate.appendChild(releaseDateData);
      bookdiv.appendChild(relaseDate);
      const bookBtn = document.createElement('button');
      bookBtn.classList.add('book-btn');
      bookBtn.onclick = () => {
        // eslint-disable-next-line no-console
        console.log(book.Added_Date);
        addMyBook(book.Added_Date)
          .then(window.location.assign('../mybooks.html'));
      };
      bookA.appendChild(bookBtn);
      bookdiv.appendChild(bookA);
    });
  });
