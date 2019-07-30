"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  add(name, email, phone, relation) {
    let newContact = new Contacts(name, email, phone, relation);
    this.contacts.push(newContact);
  }

  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }

  print() {
    this.contacts.forEach(contact => {
      console.log(contact);
    });
  }
}

class Contacts {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const myContacts = new AddressBook();

myContacts.add("Karen", "karen@griffus.com", "810-730-6460", "Mother");
myContacts.add("Dale", "dale@griffus.com", "810-730-6552", "Father");
myContacts.add("Scott", "scott@griffus.com", "111-111-1111", "Brother");
myContacts.print();
myContacts.delete("Dale");
myContacts.print();
