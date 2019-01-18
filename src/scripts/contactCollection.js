//CONTAINS THE API FETCH CALLS TO JSON SERVER

const contactCollection = {
  getContacts() {
    return fetch("http://localhost:8088/contacts").then(function(response) {
      return response.json();
    });
  }
};
export default contactCollection;
