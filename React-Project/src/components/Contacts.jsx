import { useState } from "react";
import { v4 } from "uuid"
import ContactList from "./ContactList"
import inputs from "../constants/inputs";
import style from "./Contacts.module.css"

const Contacts = () => {
    const [contacts,setContacts]=useState([]);
    const [alert,setAlert]=useState("");
    const [contact,setContact]=useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (e) => {
        const name =  e.target.name;
        const value = e.target.value;
        setContact((contact) => ({...contact, [name]: value}));
    };

    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.phone){
            setAlert("Please enter valid data!");
            return;
        }
        setAlert("")
        const newContact={...contact,id:v4()};
        setContacts((contacts) => [...contacts, newContact]);
        setContact({ id: "", name: "", lastName: "", email: "", phone: "" });
        console.log([...contacts, newContact]);
    };

    const deleteHandler=id=>{
        const newContacts=contacts.filter((contact)=>contact.id !== id)
        setContacts(newContacts);
    };
  return (
    <div>
        <div className={style.parent}>
            {
                inputs.map((input, index) => (
                    <input
                    key={index}
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    value={contact[input.name]}
                    onChange={changeHandler}
                    />
                ))
            }
            <button onClick={addHandler} className={style.button}>Add Contact</button>
        </div>
        <div>{alert && <p className={style.Error}>{alert}</p>}</div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Contacts
