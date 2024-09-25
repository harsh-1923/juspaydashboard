import React from "react";
import { formatElapsedTime } from "../../utils/utils";
import Bug from "../IconSet/Bug";
import Subscribe from "../IconSet/Subscribe";
import User from "../IconSet/User";
import "./Notifications.css";

interface NotificationData {
  title: string;
  timestamp: string;
  icon: React.ReactNode;
}

interface NotificationProps {
  icon: React.ReactNode;
  timestamp: string;
  title: string;
}

const notifications: NotificationData[] = [
  {
    title: "You have a bug that needs resolution",
    timestamp: new Date().toISOString(),
    icon: <Bug />,
  },
  {
    title: "New user registered",
    timestamp: "2024-09-22T09:30:15.000Z",
    icon: <User />,
  },
  {
    title: "Andi Lane subscribed to you",
    timestamp: "2024-09-18T07:45:00.000Z",
    icon: <Subscribe />,
  },
];

const Notifications: React.FC = () => {
  return (
    <section
      className="info-group-wrapper"
      aria-labelledby="notifications-heading"
    >
      <header className="info-group-header">
        <h2 id="notifications-heading">Notifications</h2>
      </header>
      <ul role="list" className="info-group-list">
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            title={notification.title}
            icon={notification.icon}
            timestamp={notification.timestamp}
          />
        ))}
      </ul>
    </section>
  );
};

const Notification: React.FC<NotificationProps> = ({
  icon,
  timestamp,
  title,
}) => {
  return (
    <li className="notification-wrapper" role="listitem">
      <div className="notification-icon-wrapper" aria-hidden="true">
        {icon}
      </div>
      <div className="notification-details">
        <p className="notification-title ellipsis-clip">{title}</p>
        <p className="notification-timestamp">{formatElapsedTime(timestamp)}</p>
      </div>
    </li>
  );
};

export default Notifications;
