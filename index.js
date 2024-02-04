document
  .getElementById("dummyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Thank you for joining Test Crafters Club! Stay tuned for exciting events and discussions."
    );
  });
