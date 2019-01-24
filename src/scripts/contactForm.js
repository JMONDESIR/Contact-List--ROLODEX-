// Appends the form to the DOM and listens for
// button click
import contactCollection from "./contactCollection";
import contactList from "./contantList";
// CREATES THE FORM
const contactForm = {
  formBuilder() {
    let formFrag = document.querySelector(".form");

    // NAME FIELD
    let nameField = document.createElement("fieldset");
    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", "name_Input");
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    formFrag.appendChild(nameField);
    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);

    // PHONE FIELD
    let phoneField = document.createElement("fieldset");
    let phoneInput = document.createElement("input");
    phoneInput.setAttribute("id", "phone_Input");
    let phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone #";
    formFrag.appendChild(phoneField);
    phoneField.appendChild(phoneLabel);
    phoneField.appendChild(phoneInput);

    // ADDRESS FIELD
    let addressField = document.createElement("fieldset");
    let addressInput = document.createElement("input");
    addressInput.setAttribute("id", "address_Input");
    let addressLabel = document.createElement("label");
    addressLabel.textContent = "Address";
    formFrag.appendChild(addressField);
    addressField.appendChild(addressLabel);
    addressField.appendChild(addressInput);
    //--------------------------------------------------------------

    // EVENT HANDLER
    let submitButton = document.createElement("button");
    submitButton.textContent = "SUBMIT";
    formFrag.appendChild(submitButton);
    submitButton.addEventListener("click", this.eventHandler);
  },
  eventHandler() {
    let ContactName = document.querySelector("#name_Input").value;
    let ContactNumber = document.querySelector("#phone_Input").value;
    let ContactAddress = document.querySelector("#address_Input").value;

    let newContact = {
      name: ContactName,
      phone: ContactNumber,
      address: ContactAddress
    };
    contactCollection.addContact(newContact)
      .then(response => {
        contactList.getAndAppendContacts();

        //--------------------------------------------------------------
      });
  }
};

export default contactForm;
