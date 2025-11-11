import user from "../Images/user.png";

import { useSelector } from "react-redux";

const User = () => {
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);

  return (
    <div>
      <img src={user} className="userImage" />
      <br />
      <strong>{name}</strong>
      <br />
      {email}
    </div>
  );
};

export default User;
