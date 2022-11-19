import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { addContact } from '../mockedApi/writeContacts';
import { ContactFromForm } from '../types/contact';
import { getRandomAvatarColor } from '../utils/avatarColors';
import { ContactForm } from './contactForm';

export const NewContactModal = ({
  open,
  refetchData,
  handleModalClose
}: {
  open: boolean;
  refetchData: () => void;
  handleModalClose: () => void;
}) => {
  const validateAndAddContact = async (values: ContactFromForm) => {
    await addContact({
      ...values,
      phoneNumbers: values.phoneNumbers.replace(' ', '').split(','),
      profilePhotoLocation: undefined,
      avatarColorKey: getRandomAvatarColor()
    });
    handleModalClose();
    refetchData();
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
      <Box className="contactModal">
        <ContactForm
          initialValues={{}}
          onSubmit={validateAndAddContact}
          submitButtonText={'Add Contact'}
        />
      </Box>
    </Modal>
  );
};
