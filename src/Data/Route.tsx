import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../page/SideBar/Navbar";
import Clients from "../page/Clients/Clients";
import Engin from "../page/Engins/Engin";
import Taxe from "../page/Taxe/Taxe";
import Connexion from "../page/Connexion/Connexion";
import PrivateRoute from "../page/PrivateRole";
import User from "../page/Utilisateur/User";

export const router = createBrowserRouter([
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Navbar />
      </PrivateRoute>
    ),
    children: [
      {
        path: "clients/moto",
        element: <Clients />,
      },
      {
        path: "engins/engin1",
        element: <Engin />,
      },
      {
        path: "engins/engin2",
        element: <Engin />,
      },
      {
        path: "/taxes",
        element: <Taxe />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
const AppRouter: React.FC = () => <RouterProvider router={router} />;

export default AppRouter;
