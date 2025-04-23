import { useContext, useState } from "react";
import { UserData } from "../../App";
import { UserContextData } from "./UserContext";

const UpdateUser = () => {
  const userName = useContext(UserData);
  const age = useContext(UserContextData);

  const [updatedUserName, setUserName] = useState(userName);
  const [updatedAge, setAge] = useState(age);

  const handleClick = () => {
    setUserName("Jane Doe");
    setAge(40);
  };

  return (
    <>
      <h1>UpdateUser</h1>
      <p>
        Hello, my name is {updatedUserName} and I&apos;m {updatedAge} years old
      </p>
      <button onClick={handleClick}>Update username and age</button>
    </>
  );
};

export default UpdateUser;
