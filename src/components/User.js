const User = (props) => {
  return (
    <div className="user-card">
      <h1>{props.name}</h1>
      <h2>{props.location}</h2>
    </div>
  );
};

export default User;
