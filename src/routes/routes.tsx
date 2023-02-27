import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Search from "../pages/Search";
export const routes: any = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search/:q",
    element: <Search />,
  },
]);
