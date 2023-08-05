import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="userCard">
      <h1>Name:{props.name}</h1>
      <h2>Location: Dehradun</h2>
      <h3>Contact: 68468836</h3>
    </div>
  );
};
export default User;
