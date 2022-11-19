import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Contact } from '../types/contact';
import { readContacts } from '../mockedApi/readContacts';
import { ContactAvatar } from './contactAvatar';
import { Box, Grid, Typography } from '@mui/material';
import { NewContactModal } from './newContactModal';
import { UpdateContactModal } from './updateContactModal';

export const ContactsTable = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContactModalOpen, setNewContactModalOpen] = useState(false);
  const [updateContactModalOpen, setUpdateContactModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>(
    undefined
  );

  const handleNewContactModalOpen = () => setNewContactModalOpen(true);
  const handleNewContactModalClose = () => setNewContactModalOpen(false);
  const handleUpdateContactModalOpen = (contact: Contact) => {
    setSelectedContact(contact);
    setUpdateContactModalOpen(true);
  };
  const handleUpdateContactModalClose = () => setUpdateContactModalOpen(false);

  useEffect(() => {
    async function readContactsData() {
      let response = await readContacts();
      setContacts(response);
    }
    readContactsData();
  }, []);

  const refetchData = async () => {
    let newContactsList = await readContacts();
    setContacts(newContactsList);
  };

  return (
    <Box className="contactsTable">
      <NewContactModal
        open={newContactModalOpen}
        refetchData={refetchData}
        handleModalClose={handleNewContactModalClose}
      />
      <UpdateContactModal
        initialValues={selectedContact}
        open={updateContactModalOpen}
        refetchData={refetchData}
        handleModalClose={handleUpdateContactModalClose}
      />
      <Typography className="mainTitle" variant="h4" component="h4">
        LANDR Contacts
      </Typography>
      <Box className="addContactBox">
        <Button onClick={handleNewContactModalOpen}>Add Contact</Button>
      </Box>
      <Grid className="contactsGrid" container spacing={2}>
        {contacts.map((contact) => (
          <Grid
            key={contact.id}
            onClick={() => handleUpdateContactModalOpen(contact)}
            className="contactGridItem"
            item
            xs={4}>
            <Box className="contactGridBox">
              <ContactAvatar contact={contact} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
