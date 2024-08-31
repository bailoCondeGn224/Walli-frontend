import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../page/SideBar/Navbar";
import Clients from "../page/Clients/Clients";
import Engin from "../page/Engins/Engin";
import Taxe from "../page/Taxe/Taxe";
import Connexion from "../page/Connexion/Connexion";
import PrivateRoute from "../page/PrivateRole";
import User from "../page/Utilisateur/User";
import Syndicat from "../page/Syndicat/Syndicat";
import Line from "../page/Line/Line";
import Gare from "../page/Gare/Gare";
import Trajet from "../page/Destination/Destination";
import Destination from "../page/Destination/Destination";
import Passager from "../page/Passager/Passager";

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
        path: "clients/proprietaire",
        element: <Clients />,
      },
      {
        path: "clients/syndicat",
        element: <Syndicat />,
      },
      {
        path: "clients/passager",
        element: <Passager />,
      },
      {
        path: "engins/engin1",
        element: <Engin />,
      },
      {
        path: "engins/line",
        element: <Line />,
      },
      {
        path: "engins/destination",
        element: <Destination />,
      },
      {
        path: "engins/gare",
        element: <Gare />,
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
