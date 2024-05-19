import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, username: "katto", city: "USA" },
    { id: 1, username: "same", city: "Canada" },
    { id: 2, username: "guru", city: "India" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
