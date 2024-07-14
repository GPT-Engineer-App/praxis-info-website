import { Home, Info, Stethoscope, Users, PhoneCall } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <Stethoscope className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "Team",
    to: "/team",
    icon: <Users className="h-4 w-4" />,
    page: <Team />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneCall className="h-4 w-4" />,
    page: <Contact />,
  },
];