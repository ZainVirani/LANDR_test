export async function readContacts() {
  const data = await fetch('http://localhost:3000/contacts');
  return data.json();
}
