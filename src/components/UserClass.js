import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    //api call
    const data = await fetch(" https://api.github.com/users/saismita-p");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h4>Contact: @saismita-p</h4>
      </div>
    );
  }
}

export default UserClass;
