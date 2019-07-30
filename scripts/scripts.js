const myContacts = [];
const form = document.querySelector(".input_contacts");

function handleAdd(event) {
  event.preventDefault();
  myContacts.push({
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    relation: event.target[3].value
  });
  displayContacts();
}

function displayContacts() {
  document.querySelector(".contact-card").innerHTML = "";
  form.reset();
  myContacts.forEach((person, index) => {
    const div = document.createElement("div");
    div.classList.add("contact-info");
    div.innerHTML = `
    <p>Name: ${person.name}</p>
    <p>Email: ${person.email}</p>
    <p>Phone: ${person.phone}</p>
    <p>Relation: ${person.relation}</p>
    <button id = "delete_btn"><i class="fas fa-trash-alt"></i></button>`;
    document.querySelector(".contact-card").append(div);
  });
}

form.addEventListener("submit", handleAdd);
