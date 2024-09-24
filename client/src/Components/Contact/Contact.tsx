import "./Contact.css";

interface Contact {
  name: string;
  src: string;
}

const Contact = ({ name, src }: Contact) => {
  return (
    <button className="contact-wrapper">
      <img src={src} alt={`Profile Picture of ${name}`} />
      <p>{name}</p>
    </button>
  );
};

export default Contact;
