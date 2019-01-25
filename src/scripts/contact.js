//  CONTAINS TEMPLATE THAT CREATES AND RETURNS CONTACT HTML COMPONENTS AND DISPLAYS ONE PERSON'S INFO (DOM BUILDER)

// contactArray.forEach(function(eachContact) {
//   console.log(eachContact);
// });

export default function makeDOM(contactObject, id) {
  let docFrag = document.createDocumentFragment();
  let card = document.createElement("div")
  card.setAttribute("id", id)
  let contactName = document.createElement("h2");
  let contactPhone = document.createElement("span");
  let contactAddress = document.createElement("p");

  contactName.textContent = contactObject.name;
  contactPhone.textContent = contactObject.phone;
  contactAddress.textContent = contactObject.address;

  card.appendChild(contactName);
  card.appendChild(contactPhone);
  card.appendChild(contactAddress);

  docFrag.appendChild(card)
  return docFrag;
}
