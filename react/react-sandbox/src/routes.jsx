import App from "./App";
import ProfileRouter from "./components/ProfileRouter";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <ProfileRouter />,
  },
];

export default routes;
