import { UserProps } from "../Types/user";
import { MdLocationPin } from "react-icons/md";
import "./User.css";

function User({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) {
  return (
    <div className={"user"}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>

      {location && (
        <p className={"location"}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className="stats">
        <div>
          <p>Seguindo:</p>
          <p className="number">{following}</p>
        </div>
        <div>
          <p>Seguidores:</p>
          <p className="number">{followers}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
