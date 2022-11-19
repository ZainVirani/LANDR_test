import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  addContact,
  deleteContact,
  editContact
} from '../mockedApi/writeContacts';
import { Contact, ContactFromForm } from '../types/contact';
import { getRandomAvatarColor } from '../utils/avatarColors';
import { ContactForm } from './contactForm';

export const UpdateContactModal = ({
  initialValues,
  open,
  refetchData,
  handleModalClose
}: {
  initialValues?: Contact;
  open: boolean;
  refetchData: () => void;
  handleModalClose: () => void;
}) => {
  if (!initialValues) {
    return (
      <Modal open={open} onClose={handleModalClose}>
        <Box className="contactModal">
          <Typography>Error: selected user is empty</Typography>
        </Box>
      </Modal>
    );
  }

  const validateAndAddContact = async (values: ContactFromForm) => {
    await editContact(initialValues.id, {
      ...values,
      id: initialValues.id,
      phoneNumbers: values.phoneNumbers.replace(' ', '').split(','),
      profilePhotoLocation: undefined
    });
    handleModalClose();
    refetchData();
  };

  const deleteContactWrapper = async () => {
    await deleteContact(initialValues.id);
    handleModalClose();
    refetchData();
  };

  const formattedInitialValues: ContactFromForm = {
    ...initialValues,
    phoneNumbers: initialValues.phoneNumbers
      ? initialValues.phoneNumbers.join()
      : ''
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
      <Box className="contactModal">
        <ContactForm
          initialValues={formattedInitialValues}
          onSubmit={validateAndAddContact}
          submitButtonText={'Edit Contact'}
        />
        <Button className="deleteUser" onClick={deleteContactWrapper} variant="outlined" color="error">
          <Typography>Delete User</Typography>
        </Button>
      </Box>
    </Modal>
  );
};
