import React from "react";
import { UserProps } from "../Types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
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

      <Link to={`/`}>Ver melhores projetos</Link>
    </div>
  );
}

export default User;
