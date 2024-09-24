import Contact from "../Contact/Contact";
import "./ContactBook.css";

const contacts = [
  { name: "Natali Craig", src: "/images/ContactImages/NataliCraig.png" },
  { name: "Drew Cano", src: "/images/ContactImages/DrewCano.png" },
  { name: "Orlando Diggs", src: "/images/ContactImages/OrlandoDiggs.png" },
  { name: "Andi Lane", src: "/images/ContactImages/AndiLane.png" },
  { name: "Kate Morrison", src: "/images/ContactImages/KateMorrison.png" },
  { name: "Koray Okumus", src: "/images/ContactImages/KorayOkumus.png" },
];

const ContactBook = () => {
  return (
    <div className="contact-book-wrapper">
      <div className="contact-header-wrapper">
        <h2 className="contact-header">Contacts</h2>
      </div>
      {contacts.map((contact) => (
        <Contact src={contact.src} name={contact.name} key={contact.name} />
      ))}
    </div>
  );
};

export default ContactBook;
