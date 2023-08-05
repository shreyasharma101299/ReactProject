import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Us</h1>

        <UserClass name={"Shreya"} />
      </div>
    );
  }
}

export default About;
