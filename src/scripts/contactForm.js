// Appends the form to the DOM and listens for
// button click

//CREATES THE FORM
const contactForm = {
  formBuilder() {
    let formFrag = document.querySelector(".form");

    let nameField = document.createElement("fieldset");
    let nameInput = document.createElement("input");
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    formFrag.appendChild(nameField);
    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);

    let phoneField = document.createElement("fieldset");
    let phoneInput = document.createElement("input");
    let phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone #";
    formFrag.appendChild(phoneField);
    phoneField.appendChild(phoneLabel);
    phoneField.appendChild(phoneInput);

    let addressField = document.createElement("fieldset");
    let addressInput = document.createElement("input");
    let addressLabel = document.createElement("label");
    addressLabel.textContent = "Address";
    formFrag.appendChild(addressField);
    addressField.appendChild(addressLabel);
    addressField.appendChild(addressInput);

    let button = document.createElement("button");
    button.textContent = "SUBMIT";
    formFrag.appendChild(button);

    return formFrag;
  }
};

export default contactForm;
