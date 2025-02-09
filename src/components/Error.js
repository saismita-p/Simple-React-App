import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log("Hi m error component: ", err);
  return (
    <div>
      <h1>Oops something went wrong!</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
