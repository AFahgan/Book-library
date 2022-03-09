/* eslint-disable no-undef */
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
      bookA.href = './addbook.html';

      const author = document.createElement('p');
      author.textContent = 'Author: ';
      const authorData = document.createElement('span');
      authorData.textContent = book.author;
      author.appendChild(authorData);
      bookdiv.appendChild(author);

      const publisher2 = document.createElement('p');
      publisher2.textContent = 'Publisher: ';
      const publisherData = document.createElement('span');
      publisherData.textContent = book.isbn;
      publisher2.appendChild(publisherData);
      bookdiv.appendChild(publisher2);
    });
  });
