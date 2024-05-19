import React, { useContext } from "react";

import { UserContext } from "../context/Context";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-4xl m-10">User Text</h1>
      {users.map((user) => {
        return (
          <Link
            className="flex flex-col ml-[150px] gap-y-8 p-9"
            key={user.id}
            to={`/user/${user.id}`}
          >
            {" "}
            User Name
          </Link>
        );
      })}

      <Outlet />
    </div>
  );
};

export default User;
