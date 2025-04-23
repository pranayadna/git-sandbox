const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return (
      <>
        <h1>UserStatus</h1>
        <p>Welcome Admin!</p>
      </>
    );
  } else {
    return (
      <>
        <h1>UserStatus</h1>
        <p>Welcome User!</p>
      </>
    );
  }
};

export default UserStatus;
