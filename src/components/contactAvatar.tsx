import { Avatar, Typography } from '@mui/material';
import React from 'react';
import { Contact } from '../types/contact';
import { getAvatarColor } from '../utils/avatarColors';

const avatarSizeStyle = { width: '75px', height: '75px' };

export const ContactAvatar = ({ contact }: { contact: Contact }) => {
  const contactAvatar = contact.profilePhotoLocation ? (
    <Avatar
      className="contactPhoto"
      alt={contact.name}
      src={contact.profilePhotoLocation}
      sx={avatarSizeStyle}
    />
  ) : (
    <Avatar
      className="contactPhoto"
      alt={contact.name}
      sx={{ ...avatarSizeStyle, ...getAvatarColor(contact.avatarColorKey) }}>
      <Typography variant="h4">{contact.name.slice(0, 1)}</Typography>
    </Avatar>
  );
  return (
    <div className="contactAvatar">
      {contactAvatar}
      <Typography noWrap className="contactName" variant="h6" component="h6">
        {contact.name}
      </Typography>
    </div>
  );
};
