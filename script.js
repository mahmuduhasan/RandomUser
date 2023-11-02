function createUser(userData) {
  console.log(userData);
  document.getElementById("user-info").innerHTML = `
          <h4>Name : ${userData.name.title}. ${userData.name.first} ${userData.name.last}</h4>
          <h4>Age : ${userData.dob.age}</h4>
          <h4>Email : ${userData.email}</h4>
          <h4>Phone : ${userData.phone}</h4>
          <h4>Cell : ${userData.cell}</h4>
          <h4>Address : ${userData.location.street.number}, ${userData.location.street.name}, ${userData.location.city}, ${userData.location.state}, ${userData.location.country} - ${userData.location.postcode}</h4>
          `;
  document.getElementById("user-img").src = `${userData.picture.large}`;
}

function getUser() {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => createUser(data.results[0]))
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", getUser);
document.getElementById("generate").addEventListener("click", getUser);
