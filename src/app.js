document.addEventListener("DOMContentLoaded", function () {
  // Mock login handling
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("message").innerText = "Login successful!";
    });
  }

  // Load books on dashboard
  const bookTable = document.getElementById("bookTable");
  if (bookTable) {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => {
        data.books.forEach((book) => {
          const row = bookTable.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
          cell1.textContent = book.id;
          cell2.textContent = book.title;
          cell3.textContent = book.author;
        });
      })
      .catch((error) => {
        const row = bookTable.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 3;
        cell.textContent = "Error loading books";
      });
  }
});
