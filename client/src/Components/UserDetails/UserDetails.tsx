import "./UserDetails.css";

const UserDetails: React.FC = () => {
  return (
    <div className="userdetails-wrapper" aria-labelledby="User Details">
      <img src="/images/UserProfileAvatar.png" alt="Profile Image" />
      <h2>ByeWind</h2>
    </div>
  );
};

export default UserDetails;
