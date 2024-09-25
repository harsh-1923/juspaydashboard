import React from "react";
import { formatElapsedTime } from "../../utils/utils";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./Activities.css";

interface ActivityData {
  title: string;
  timestamp: string;
  src: string;
}

interface ActivityProps {
  title: string;
  timestamp: string;
  src: string;
}

const activities: ActivityData[] = [
  {
    title: "Released a new version",
    timestamp: new Date().toISOString(),
    src: "/images/ContactImages/DrewCano.png",
  },
  {
    title: "Fixed a critical bug",
    timestamp: "2024-09-22T09:30:15.000Z",
    src: "/images/ContactImages/AndiLane.png",
  },
  {
    title: "Deployed to production",
    timestamp: "2024-09-18T07:45:00.000Z",
    src: "/images/ContactImages/KateMorrison.png",
  },
  {
    title: "Code review completed",
    timestamp: "2024-08-29T20:20:12.000Z",
    src: "/images/ContactImages/OrlandoDiggs.png",
  },
  {
    title: "Merged PR into main",
    timestamp: "2024-07-01T10:12:30.000Z",
    src: "/images/ContactImages/KorayOkumus.png",
  },
];

const Activities: React.FC = () => {
  return (
    <section
      className="info-group-wrapper"
      aria-labelledby="activities-heading"
    >
      <header className="info-group-header">
        <h2 id="activities-heading">Activities</h2>
      </header>
      <ul role="list" className="info-group-list">
        {activities.map((activity) => (
          <Activity
            key={activity.timestamp}
            title={activity.title}
            timestamp={activity.timestamp}
            src={activity.src}
          />
        ))}
      </ul>
    </section>
  );
};

const Activity: React.FC<ActivityProps> = ({ title, timestamp, src }) => {
  return (
    <li
      className="activity-wrapper"
      role="listitem"
      aria-label={`Activity: ${title}, ${formatElapsedTime(timestamp)}`}
    >
      <div className="activity-avatar-wrapper">
        <UserAvatar src={src} username="Not Available" />
        <span className="activity-bar" aria-hidden="true"></span>
      </div>
      <div className="activity-details">
        <p className="activity-title ellipsis-clip" aria-label={title}>
          {title}
        </p>
        <p
          className="activity-timestamp"
          aria-label={`Elapsed time: ${formatElapsedTime(timestamp)}`}
        >
          {formatElapsedTime(timestamp)}
        </p>
      </div>
    </li>
  );
};

export default Activities;
