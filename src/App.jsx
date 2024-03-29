import { useEffect, useState } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import SearchBox from './Components/SearchBox/SearchBox';
import userData from './userData.json';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return userData;
  });
  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');
  const handleFilterChange = value => {
    setFilter(value);
  };
  const handleAddContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const handleDeleteContacts = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />

      <ContactList
        userData={filteredContacts}
        contactDelete={handleDeleteContacts}
      />
    </div>
  );
}

export default App;
