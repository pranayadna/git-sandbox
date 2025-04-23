import { useState } from "react";

const ProfileState = () => {
  const [user, setUser] = useState({ name: "Jane Doe", age: 28 });

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleAgeChange = (e) => {
    setUser({ ...user, age: e.target.value });
  };

  return (
    <>
      <h1>ProfileState</h1>
      <p>Name: {user.name}</p>
      <input
        type="text"
        placeholder="change name"
        onChange={handleNameChange}
      />
      <p>Age: {user.age}</p>
      <input
        type="number"
        placeholder="change age"
        onChange={handleAgeChange}
      />
    </>
  );
};

export default ProfileState;
