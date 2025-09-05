import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import ViewContact from './components/ViewContact'
import SearchBar from './components/SearchBar'

function App() {
  const [contacts, setContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedContact, setSelectedContact] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch contacts from API
  useEffect(() => {
    fetchContacts()
  }, [])

  // Filter contacts based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredContacts(contacts)
    } else {
      const filtered = contacts.filter(contact =>
        (contact.first_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (contact.last_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (contact.phone || '').toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredContacts(filtered)
    }
  }, [contacts, searchTerm])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
      
      if (!response.ok) {
        throw new Error('Failed to fetch contacts')
      }
      
      const data = await response.json()
      setContacts(data)
      setFilteredContacts(data)
      setError('')
    } catch (err) {
      setError('Error loading contacts: ' + err.message)
      console.error('Error fetching contacts:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: Date.now(), // Simple ID generation
    }
    const updatedContacts = [...contacts, contactWithId]
    setContacts(updatedContacts)
    setShowAddModal(false)
  }

  const handleEditContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    )
    setContacts(updatedContacts)
    setShowEditModal(false)
    setSelectedContact(null)
  }

  const handleDeleteContact = (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      const updatedContacts = contacts.filter(contact => contact.id !== contactId)
      setContacts(updatedContacts)
    }
  }

  const handleViewContact = (contact) => {
    setSelectedContact(contact)
    setShowViewModal(true)
  }

  const handleEditContactClick = (contact) => {
    setSelectedContact(contact)
    setShowEditModal(true)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const closeAllModals = () => {
    setShowAddModal(false)
    setShowEditModal(false)
    setShowViewModal(false)
    setSelectedContact(null)
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading contacts...</p>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Contact Manager</h1>
          <p>Manage your contacts efficiently</p>
        </header>

        <div className="controls">
          <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
          <button 
            className="btn btn-primary add-btn"
            onClick={() => setShowAddModal(true)}
          >
            + Add Contact
          </button>
        </div>

        {error && (
          <div className="error-message">
            {error}
            <button onClick={fetchContacts} className="btn btn-secondary">
              Retry
            </button>
          </div>
        )}

        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
          onEdit={handleEditContactClick}
          onView={handleViewContact}
          searchTerm={searchTerm}
        />

        {/* Modals */}
        {showAddModal && (
          <AddContact
            onAdd={handleAddContact}
            onClose={closeAllModals}
          />
        )}

        {showEditModal && selectedContact && (
          <EditContact
            contact={selectedContact}
            onEdit={handleEditContact}
            onClose={closeAllModals}
          />
        )}

        {showViewModal && selectedContact && (
          <ViewContact
            contact={selectedContact}
            onClose={closeAllModals}
          />
        )}
      </div>
    </div>
  )
}

export default App