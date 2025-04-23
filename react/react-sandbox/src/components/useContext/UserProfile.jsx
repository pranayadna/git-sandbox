import { useContext } from "react";
import { UserContextData } from "./UserContext";

const UserProfile = () => {
  const age = useContext(UserContextData);

  return (
    <>
      <h1>UserProfile</h1>
      <p>age data from UserContext using useContext: {age}</p>
    </>
  );
};

export default UserProfile;
