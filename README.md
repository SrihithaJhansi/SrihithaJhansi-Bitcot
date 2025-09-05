# React Contact Management App

A simple **React-based Contact Management Application** built as part of a coding challenge.  
The app provides basic CRUD (Create, Read, Update, Delete) functionality with search and local state management.

---

## 🚀 Features

- **Contacts View**
  - Fetch contacts from JSON API:  
    [sample.json](https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json)  
  - Display contacts in a clean list view  
  - Delete contacts from local state  

- **Add Contact**
  - Modal form to add a new contact  
  - Fields: First Name, Last Name, Email, Phone, Address  
  - Input validation for required fields  
  - New contact stored in local state  

- **Edit Contact**
  - Modal form to edit existing contact  
  - Pre-filled with selected contact details  
  - Validation applied to all fields  
  - Changes reflected instantly in contact list  

- **View Contact Details**
  - Modal to view complete details of a contact  
  - Displays all fields including address  

- **Search Contact**
  - Real-time search functionality  
  - Search by **First Name, Last Name, or Phone Number**  
  - Filters contacts locally without API calls  

---

## 🛠️ Tech Stack

- **React.js** (JSX, no TypeScript)  
- **Axios** (for fetching JSON data)  
- **CSS** (simple, clean, no gradients, minimal styles)  

---
src/
│── App.jsx
│── App.css
│── main.jsx
│
├── components/
│ ├── ContactList.jsx
│ ├── ContactCard.jsx
│ ├── SearchBar.jsx
│ ├── AddContact.jsx
│ ├── EditContact.jsx
│ ├── ViewContact.jsx
│ └── Modal.jsx


---

## ⚙️ Installation & Setup

1. Clone the repository


Install dependencies:

npm install


Start development server:

npm run dev


Open the app in your browser:

http://localhost:5173/

✅ Requirements Checklist

 Single Page Application

 Contacts fetched from given JSON API

 Local state management (no backend API for add/edit/delete)

 Add Contact form with validation

 Edit Contact with pre-filled values

 View Contact details in modal

 Delete Contact from local state

 Search functionality by first name, last name, phone

 Optimized, clean, reusable code

 



👩‍💻 Author

Srihitha Jhansi Teeda

## 📂 Project Structure

