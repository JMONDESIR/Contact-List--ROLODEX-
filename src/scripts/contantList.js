// Appends a list of contacts to the DOM by taking in data from "contactCollection"
// and iterating over it to create contact components

import contactCollection from "./contactCollection";
import makeDOM from "./contact";


const contactList = {
  getAndAppendContacts() {

    contactCollection.getContacts()
      .then(function (contactArray) {
        let displayContainer = document.querySelector(".output");
        displayContainer.textContent = "";
        let bigDocFrag = document.createDocumentFragment();

        contactArray.forEach(function (eachContact) {
          let thingy = makeDOM(eachContact, String(eachContact.id));
          bigDocFrag.appendChild(thingy);



          // DELETE BUTTON
          const deleteButton = document.createElement("button")
          deleteButton.textContent = "DELETE"
          deleteButton.setAttribute("id", String(eachContact.id))

          deleteButton.addEventListener("click", function (e) {
            // let contactId = contactObject.id
            const divId = e.target.id
            console.log(divId)
            contactCollection.deleteContact(divId)
              .then(response => {
                contactList.getAndAppendContacts()
              })

          });

          // EDIT BUTTON
          const editButton = document.createElement("button")
          editButton.textContent = "EDIT"
          editButton.setAttribute("id", "editButton")

          bigDocFrag.appendChild(deleteButton);
          bigDocFrag.appendChild(editButton);

        });

        displayContainer.appendChild(bigDocFrag);
      });
  }
};

export default contactList;
