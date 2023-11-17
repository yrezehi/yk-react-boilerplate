import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Wee Woo Wee Woo!</h1>
      <p>The expected was unexpected.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}