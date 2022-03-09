/* eslint-disable no-undef */
const deleteBook = (id) => fetch(`/deletebook/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
});

fetch('/mybooks')
  .then((res) => res.json())
  .then((mybooks) => {
    const table = document.getElementById('mybooks-table');
    mybooks.forEach((book) => {
      const row = document.createElement('tr');
      const id = document.createElement('td');
      id.textContent = book.book_id;
      row.appendChild(id);
      const img = document.createElement('img');
      img.src = book.cover;
      img.classList.add('img');
      row.appendChild(img);

      const addedDate = document.createElement('td');
      addedDate.textContent = book.added_date;
      row.appendChild(addedDate);
      const Btn = document.createElement('button');
      Btn.textContent = 'Delete Book';
      Btn.classList.add('btn');
      Btn.onclick = () => {
        console.log(book.book_id);
        deleteBook(book.id)
          .then(window.location.assign('../mybooks.html'));
      };
      row.appendChild(Btn);
      table.appendChild(row);
    });
  });
