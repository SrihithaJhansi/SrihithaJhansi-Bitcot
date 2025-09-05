import ContactCard from './ContactCard'

function ContactList({ contacts, onDelete, onEdit, onView, searchTerm }) {
  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <h3>
          {searchTerm ? 'No contacts found' : 'No contacts yet'}
        </h3>
        <p>
          {searchTerm 
            ? `No contacts match "${searchTerm}"` 
            : 'Add your first contact to get started'
          }
        </p>
      </div>
    )
  }

  return (
    <div className="contact-grid">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </div>
  )
}

export default ContactList