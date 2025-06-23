const ContactList = ({contacts, deletaHandler}) => {
  return (
    <div>
      <h2>Contact list</h2>
      {
      contacts.lenght ? (
            <ul>
                {
                    contacts.map((contact) => (
                        <li key={contact.id}>
                            <p>
                                {contact.name} {contact.lastName}
                            </p>
                            <p>
                                {/* <span></span> */}
                                {contact.email}
                            </p>
                            <p>
                                {/* <span></span> */}
                                {contact.phone}
                            </p>
                            <button onClick={()=>deletaHandler(contact.id)}>delet</button>
                        </li>
                    ))
                }
            </ul>
        ) : (
            <p>No Contact Yet!</p>
        )
      }
    </div>
  )
}

export default ContactList
