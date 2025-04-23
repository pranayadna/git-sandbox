import { UserData } from "../../App";
import { createContext } from "react";
import UserProfile from "./UserProfile";
import UpdateUser from "./UpdateUser";

export const UserContextData = createContext();

const UserContext = () => {
  const age = 21;

  return (
    <>
      <h1>UserContext</h1>
      <UserData.Consumer>
        {(name) => {
          return <p>User name from context: {name}</p>;
        }}
      </UserData.Consumer>
      <UserContextData.Provider value={age}>
        <UserProfile />
        <UpdateUser />
      </UserContextData.Provider>
    </>
  );
};

export default UserContext;
