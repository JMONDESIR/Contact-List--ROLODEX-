// Appends a list of contacts to the DOM by taking in data from "contactCollection"
// and iterating over it to create contact components

import contactCollection from "./contactCollection";
import contact from "./contact";

const contactList = {
  getAndAppendContacts() {
    contactCollection.getContacts().then(function(contactArray) {
      contactArray.forEach(function(eachContact) {
        contact.makeDOM(eachContact);
      });
    });
  }
};

export default contactList;
