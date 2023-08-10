import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shreyasharma101299");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    const { login } = this.state.userInfo;
    return (
      <div className="userCard">
        <h1>Name: {login}</h1>
        <div>
          User Info
          <UserContext.Consumer>
            {(data) => (
              <div>
                <h1>{data.LoggedInUser}</h1>
              </div>
            )}
          </UserContext.Consumer>
        </div>

        <h2>Location: Haldwani</h2>
        <h3>Contact: 68468836</h3>
      </div>
    );
  }
}
export default UserClass;
