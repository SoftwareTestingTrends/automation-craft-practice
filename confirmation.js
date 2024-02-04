// Function to retrieve query parameters from the URL
function getQueryParameter(name) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Retrieve and display form data
let firstName = getQueryParameter("firstName");
let lastName = getQueryParameter("lastName");
let userLocation = getQueryParameter("location");
let email = getQueryParameter("email");
let gender = getQueryParameter("gender");
let languages = getQueryParameter("languages");
let automation = getQueryParameter("automation");
let aspirations = getQueryParameter("aspirations");
let gainFromCommunity = getQueryParameter("gainFromCommunity");
let interestingFact = getQueryParameter("interestingFact");
let linkedin = getQueryParameter("linkedin");

// Retrieve the "userinfo" div
const userinfoDiv = document.getElementById('userinfo');

// Display the retrieved values within the "userinfo" div
userinfoDiv.innerHTML = `
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Location: ${userLocation}</p>
    <p>Email: ${email}</p>
    <p>Gender: ${gender}</p>
    <p>Programming Languages: ${languages}</p>
    <p>Testing Tools: ${automation}</p>
    <p>Career Aspirations: ${aspirations}</p>
    <p>What You Hope to Gain: ${gainFromCommunity}</p>
    <p>Interesting Fact: ${interestingFact}</p>
    <p>LinkedIn Profile: ${linkedin}</p>
`;
