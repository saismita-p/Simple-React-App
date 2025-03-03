import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Food Delivery App</h2>
      <User name={"Sai Smita"} location={"Bangalore"} />
      {/* <UserClass name={"Sai Smita"} location={"Karnataka"} /> */}
      <UserClass />
    </div>
  );
};

export default About;
