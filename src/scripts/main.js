// This is where Browserfy starts and is the central component of the application
import contactList from "./contantList";
import contactForm from "./contactForm";

contactForm.formBuilder();
contactList.getAndAppendContacts();
//--------------------------------------------------------------------------------------
