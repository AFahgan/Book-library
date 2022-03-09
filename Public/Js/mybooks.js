/* eslint-disable no-undef */
fetch('/mybooks')
  .then((res) => res.json())
  .then((mybooks) => {
    const table = document.getElementById('mybooks-table');
    mybooks.forEach((book) => {
      const row = document.createElement('tr');
      const id = document.createElement('td');
      id.textContent = book.name;
      row.appendChild(id);
      const addedDate = document.createElement('td');
      addedDate.textContent = book.added_date;
      row.appendChild(addedDate);
      const Btn = document.createElement('button');
      Btn.textContent = 'Delete Book';
      Btn.classList.add('btn');

      row.appendChild(Btn);
      table.appendChild(row);
    });
  });
