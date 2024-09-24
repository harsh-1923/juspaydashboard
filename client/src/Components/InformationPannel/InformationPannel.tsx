import ContactBook from "../ContactBook/ContactBook";
import "./InformationPannel.css";

const InformationPannel = () => {
  return (
    <div className="notification-pane-wrapper">
      <h2 className="notification-panel-header">Notifications</h2>
      <ContactBook />
    </div>
  );
};

export default InformationPannel;
