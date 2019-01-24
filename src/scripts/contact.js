//  CONTAINS TEMPLATE THAT CREATES AND RETURNS CONTACT HTML COMPONENTS AND DISPLAYS ONE PERSON'S INFO (DOM BUILDER)

// contactArray.forEach(function(eachContact) {
//   console.log(eachContact);
// });
const contact = {
  makeDOM(contactObject) {
    let docFrag = document.createDocumentFragment();

    let contactName = document.createElement("h2");
    let contactPhone = document.createElement("span");
    let contactAddress = document.createElement("p");

    contactName.textContent = contactObject.name;
    contactPhone.textContent = contactObject.phone;
    contactAddress.textContent = contactObject.address;

    docFrag.appendChild(contactName);
    docFrag.appendChild(contactPhone);
    docFrag.appendChild(contactAddress);
    return docFrag;
  }
};

export default contact;
