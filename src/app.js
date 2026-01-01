document.addEventListener("DOMContentLoaded", function () {
  // --- LOGIN FORM VALIDATION (CR-001) ---
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("message");

      if (username === "" || password === "") {
        message.style.color = "red";
        message.innerText = "Username and password cannot be empty!";
      } else {
        message.style.color = "green";
        message.innerText = "Login successful!";
      }
    });
  }

  // --- LOAD BOOK INVENTORY (CR-002 & CR-003) ---
  const bookTableBody = document.querySelector("#bookTable tbody");
  if (bookTableBody) {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => {
        data.books.forEach((book) => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${book.id}</td>
                                     <td>${book.title}</td>
                                     <td>${book.author}</td>`;
          bookTableBody.appendChild(row);
        });
      })
      .catch((error) => {
        bookTableBody.innerHTML =
          "<tr><td colspan='3'>Error loading books</td></tr>";
      });
  }
});
