import { Link } from "react-router-dom";
import placeholderIcon from "../assets/log.png";

import "../styles/UserIconProfile.css";

export function UserIconProfile() {
  return (
    <Link className="icon-user-data-container">
      <div className="">
        <img className="user-icon" src={placeholderIcon} alt="" />
      </div>
    </Link>
  );
}
