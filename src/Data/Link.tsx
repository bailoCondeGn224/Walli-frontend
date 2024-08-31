import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessIcon from "@mui/icons-material/Business";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BuildIcon from "@mui/icons-material/Build";
import PaymentIcon from "@mui/icons-material/Payment";
import GroupIcon from "@mui/icons-material/Group";

export interface Link {
  id: number;
  text: string;
  link?: string;
  icon?: React.ReactNode;
  children?: Link[];
}

const links: Link[] = [
  {
    id: 1,
    text: "Dashboard",
    link: "/home",
    icon: <DashboardIcon sx={{ color: "white" }} />,
  },
  {
    id: 2,
    text: "Clients",
    icon: <AccountCircleIcon sx={{ color: "white" }} />,
    children: [
      { id: 21, text: "Proprietaire", link: "/clients/proprietaire" },
      { id: 22, text: "Syndicat", link: "/clients/syndicat" },
      { id: 23, text: "Passager", link: "/clients/passager" },
    ],
  },
  {
    id: 3,
    text: "Engins",
    icon: <BuildIcon sx={{ color: "white" }} />,
    children: [
      { id: 31, text: "Engin", link: "/engins/engin1" },
      { id: 32, text: "Line", link: "/engins/line" },
      { id: 33, text: "Gare", link: "/engins/gare" },
      { id: 34, text: "Destination", link: "/engins/destination" },
    ],
  },
  {
    id: 4,
    text: "Controles",
    link: "/contact",
    icon: <VerifiedUserIcon sx={{ color: "white" }} />,
  },
  {
    id: 5,
    text: "Voles",
    link: "/blog",
    icon: <LocalOfferIcon sx={{ color: "white" }} />,
  },
  {
    id: 6,
    text: "Caisses",
    link: "/careers",
    icon: <PaymentIcon sx={{ color: "white" }} />,
  },
  {
    id: 7,
    text: "Boutique",
    link: "/faq",
    icon: <MonetizationOnIcon sx={{ color: "white" }} />,
  },
  {
    id: 8,
    text: "Taxes",
    link: "/taxes",
    icon: <AssignmentIcon sx={{ color: "white" }} />,
  },
  {
    id: 9,
    text: "Louer",
    link: "/privacy-policy",
    icon: <BusinessIcon sx={{ color: "white" }} />,
  },
  {
    id: 10,
    text: "Commandes",
    link: "/terms-of-service",
    icon: <PeopleAltIcon sx={{ color: "white" }} />,
  },
  {
    id: 11,
    text: "Utilisateurs",
    link: "/user",
    icon: <GroupIcon sx={{ color: "white" }} />,
  },
];

export default links;
