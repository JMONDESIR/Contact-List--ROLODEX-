//CONTAINS THE API FETCH CALLS TO JSON SERVER

const contactCollection = {
  getContacts() {
    return fetch("http://localhost:8088/contacts").then(function (response) {
      return response.json();
    });
  },

  addContact(addNewContact) {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addNewContact)
    });
  },

  deleteContact(id) {
    return fetch(`http://localhost:8088/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

export default contactCollection;
