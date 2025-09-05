function ContactCard({ contact, onDelete, onEdit, onView }) {
  const handleDelete = (e) => {
    e.stopPropagation()
    onDelete(contact.id)
  }

  const handleEdit = (e) => {
    e.stopPropagation()
    onEdit(contact)
  }

  const handleView = () => {
    onView(contact)
  }

  return (
    <div className="contact-card" onClick={handleView}>
      <div className="contact-info">
        <h3>{contact.first_name || ''} {contact.last_name || ''}</h3>
        <p className="contact-phone">{contact.phone}</p>
        <p className="contact-email">{contact.email}</p>
        {contact.address && <p className="contact-address">{contact.address}</p>}
      </div>

      <div className="contact-actions">
        <button 
          className="btn-icon btn-view" 
          onClick={handleView}
          title="View Details"
        >
          👁️
        </button>
        <button 
          className="btn-icon btn-edit" 
          onClick={handleEdit}
          title="Edit Contact"
        >
          ✏️
        </button>
        <button 
          className="btn-icon btn-delete" 
          onClick={handleDelete}
          title="Delete Contact"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default ContactCard