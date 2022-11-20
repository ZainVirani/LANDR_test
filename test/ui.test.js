import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import { ContactAvatar } from '../src/components/contactAvatar';
import { ContactsTable } from '../src/components/ContactsTable';
import { NewContactModal } from '../src/components/newContactModal';
import { UpdateContactModal } from '../src/components/updateContactModal';
import * as apiRead from '../src/mockedApi/readContacts';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const fakeUser = {
  id: "0",
  name: 'Zain Virani',
  jobTitle: 'TBD',
  address: 'Toronto',
  phoneNumbers: ['514-715-6639'],
  email: 'zainvirani96@gmail.com',
  avatarColorKey: 0,
};

const fakeNewUser = {
  id: "2",
  name: 'Vain Zirani',
  jobTitle: '',
  address: 'Montreal',
  phoneNumbers: ['514-715-9936'],
  email: 'notme@gmail.com',
  avatarColorKey: 1,
}

const userList = [fakeUser]

apiRead.readContacts = jest.fn(() => userList)

describe('Contact Avatar', () => {
  it('should render a user\'s avatar', () => {
    const avatar = shallow(<ContactAvatar
      contact={fakeUser}
    />);
    expect(shallowToJson(avatar)).toMatchSnapshot();
  })
});

// describe('Contacts Table', () => {
//   it('should render 1 user', () => {
//     const table = mount(<ContactsTable />);
//     expect(shallowToJson(table)).toMatchSnapshot();
//   })
//   it('should render 2 users', () => {
//     userList.push(fakeNewUser)
//     const table = mount(<ContactsTable />);
//     expect(shallowToJson(table)).toMatchSnapshot();
//   })
// });

// describe('New Contact Modal', () => {
//   let root;
//   afterEach(() => {
//     root.unmount();
//   })
//   it('should attempt to write data', () => {
//     act(() => {
//       root = create(<NewContactModal />)
//     })
//     const instance = root.root;
//     expect(root.toJSON()).toMatchSnapshot();
//     console.log(root.toTree())
//     const buttons = instance.findByType('button');
//     act(() => {
//     })
//     console.log(buttons);
//   })
// });

// describe('Update Contact Modal', () => {
//   let root;
//   afterEach(() => {
//     root.unmount();
//   })
//   it('should attempt to update data', () => {
//     act(() => {
//       root = create(<UpdateContactModal />)
//     })
//     const instance = root.root;
//     expect(root.toJSON()).toMatchSnapshot();
//     const buttons = instance.findByType('button');
//     act(() => {
//     })
//     console.log(buttons);
//   })
//   it('should attempt to delete data', () => {
//     act(() => {
//       root = create(<UpdateContactModal />)
//     })
//     const instance = root.root;
//     expect(root.toJSON()).toMatchSnapshot();
//     const buttons = instance.findByType('button');
//     act(() => {
//     })
//     console.log(buttons);
//   })
// });