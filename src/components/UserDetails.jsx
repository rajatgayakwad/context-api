import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { users } = useContext(UserContext);
    console.log(users);
  return (
    <div>
      <h1>{users[id].username}</h1>
      <h3>{users[id].city}</h3>

      <button
        onClick={() => navigate(-1)}
        className="px-3 py-2 border-2 bg-red-400"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
