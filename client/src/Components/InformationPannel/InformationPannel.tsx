import Activities from "../Activities/Activities";
import Contacts from "../Contacts/Contacts";
import Notifications from "../Notifications/Notifications";
import "./InformationPannel.css";

const InformationPannel = () => {
  return (
    <div className="notification-pane-wrapper">
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default InformationPannel;
