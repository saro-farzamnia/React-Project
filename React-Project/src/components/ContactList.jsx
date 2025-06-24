import style from "./ContactList.module.css"
const ContactList = ({contacts, deleteHandler}) => {
  return (
    <div className={style.parent}>
      <h2 className={style.title}>Contact list</h2>
      {
      contacts.length ? (
            <ul>
                {
                    contacts.map((contact) => (
                        <li key={contact.id} className={style.User}>
                            <p>
                                {contact.name} {contact.lastName}
                            </p>
                            <p>
                                <span>📧</span>
                                {contact.email}
                            </p>
                            <p>
                                <span>📞</span>
                                {contact.phone}
                            </p>
                            <button onClick={() => deleteHandler(contact.id)}>🗑️</button>
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
