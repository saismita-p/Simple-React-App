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
      <div className="p-4 m-4 flex items-center flex-col">
        <img src={avatar_url} className="rounded-full"></img>
        <div className="py-2 my-2">
          <h1 className="font-bold">{name}</h1>
          <h2>{location}</h2>
          <h4>Socials: @saismita-p</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
