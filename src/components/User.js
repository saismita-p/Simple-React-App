const User = (props) => {
  return (
    <div className="p-4 m-4 border border-solid border-black">
      <h1>{props.name}</h1>
      <h2>{props.location}</h2>
    </div>
  );
};

export default User;
