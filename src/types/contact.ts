export interface Contact {
  id: string;
  name: string;
  jobTitle?: string;
  address?: string;
  phoneNumbers?: string[];
  email?: string;
  profilePhotoLocation?: string;
  avatarColorKey: number;
}

export type NewContact = Omit<Contact, 'id'>;

export interface ContactFromForm extends Omit<Contact, 'id' | 'phoneNumbers'> {
  phoneNumbers: string;
}
