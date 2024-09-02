import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error & { statusText?: string };
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center"
    >
      <h1 className="mb-4 text-2xl font-bold">Oops!</h1>
      <p className="mb-4 text-lg">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
