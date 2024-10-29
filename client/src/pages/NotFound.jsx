import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
export default NotFound;
