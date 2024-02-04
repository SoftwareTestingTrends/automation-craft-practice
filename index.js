document
  .getElementById("dummyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    // Extract form values
    const firstName = formData.get("firstName") || "Not provided";
    const lastName = formData.get("lastName") || "Not provided";
    const location = formData.get("location") || "Not provided";
    const email = formData.get("email") || "Not provided";
    const gender = formData.get("gender") || "Not provided";
    const languages = formData.getAll("languages").join(", ") || "Not provided";
    const automation =
      formData.getAll("automation").join(", ") || "Not provided";
    const aspirations = formData.get("aspirations") || "Not provided";
    const gainFromCommunity =
      formData.get("gainFromCommunity") || "Not provided";
    const interestingFact = formData.get("interestingFact") || "Not provided";
    const linkedin = formData.get("linkedin") || "Not provided";

    // Use the retrieved values as needed
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Location:", location);
    console.log("Email:", email);
    console.log("Gender:", gender);
    console.log("Programming Languages:", languages);
    console.log("Testing Tools:", automation);
    console.log("Aspirations:", aspirations);
    console.log("Gain from Community:", gainFromCommunity);
    console.log("Interesting Fact:", interestingFact);
    console.log("LinkedIn Profile:", linkedin);

    // Construct the URL with query parameters
    let confirmationUrl =
      "confirmation.htm" +
      "?firstName=" +
      encodeURIComponent(firstName) +
      "&lastName=" +
      encodeURIComponent(lastName) +
      "&location=" +
      encodeURIComponent(location) +
      "&email=" +
      encodeURIComponent(email) +
      "&gender=" +
      encodeURIComponent(gender) +
      "&languages=" +
      encodeURIComponent(languages) +
      "&automation=" +
      encodeURIComponent(automation) +
      "&aspirations=" +
      encodeURIComponent(aspirations) +
      "&gainFromCommunity=" +
      encodeURIComponent(gainFromCommunity) +
      "&interestingFact=" +
      encodeURIComponent(interestingFact) +
      "&linkedin=" +
      encodeURIComponent(linkedin);

    window.location.href = confirmationUrl;
  });
