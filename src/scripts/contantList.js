// Appends a list of contacts to the DOM by taking in data from "contactCollection"
// and iterating over it to create contact components

import contactCollection from "./contactCollection";
import contact from "./contact";

const contactList = {
  getAndAppendContacts() {
    contactCollection.getContacts().then(function(contactArray) {
      let bigDocFrag = document.createDocumentFragment();
      contactArray.forEach(function(eachContact) {
        let thingy = contact.makeDOM(eachContact);
        bigDocFrag.appendChild(thingy);
        console.log(thingy);
      });
      let formContainer = document.querySelector(".form");
      let displayContainer = document.querySelector(".output");
      displayContainer.appendChild(bigDocFrag);
    });
  }
};

export default contactList;
