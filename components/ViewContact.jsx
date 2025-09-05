import Modal from './Modal'

function ViewContact({ contact, onClose }) {
  return (
    <Modal title="Contact Details" onClose={onClose}>
      <div className="contact-details">
        <div className="details-grid">
          <div className="detail-item">
            <label>Full Name</label>
            <p>{contact.first_name} {contact.last_name}</p>
          </div>
          
          <div className="detail-item">
            <label>Email</label>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
          
          <div className="detail-item">
            <label>Phone</label>
            <p>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </p>
          </div>
          
          {contact.address && (
            <div className="detail-item">
              <label>Address</label>
              <p>{contact.address}</p>
            </div>
          )}
          
          {contact.id && (
            <div className="detail-item">
              <label>Contact ID</label>
              <p>{contact.id}</p>
            </div>
          )}
        </div>

        <div className="detail-actions">
          <button 
            onClick={onClose}
            className="btn btn-primary"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ViewContact