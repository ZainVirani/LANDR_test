import { v4 as uuidv4 } from 'uuid';
import { Contact, NewContact } from '../types/contact';

export async function addContact(newContact: NewContact) {
  await fetch('http://localhost:3000/contacts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...newContact,
      id: uuidv4()
    })
  });
}

export async function editContact(contactId: string, contact: Contact) {
  await fetch(`http://localhost:3000/contacts/${contactId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  });
}

export async function deleteContact(contactId: string) {
  await fetch(`http://localhost:3000/contacts/${contactId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
