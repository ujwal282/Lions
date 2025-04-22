import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./Components/Layout/AppLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import CurrentDigiTeam from "./Components/DigiTeam/CurrentDigiTeam.jsx";
import PastDigiTeam from "./Components/DigiTeam/PastDigiTeam.jsx";
import SeniorOfficials from "./Components/DigiTeam/SeniorOfficials.jsx";
import ClusterHead_DeputyHead from "./Components/DigiTeam/ClusterHead_DeputyHead.jsx";
import RegionChairPerson from "./Components/DigiTeam/RegionChairPerson.jsx";
import ZoneChairPerson from "./Components/DigiTeam/ZoneChairPerson.jsx";
import GlobalCausesTeam from "./Components/DigiTeam/GlobalCausesTeam.jsx";
import DigiProgramTeam from "./Components/DigiTeam/DigiProgramTeam.jsx";
import LeoDistrict from "./Components/DigiTeam/LeoDistrict.jsx";
import Clubs from "./Components/Club/Clubs.jsx"
import LeoClubs from "./Components/Club/LeoClubs.jsx";
import "./App.css";
import Blog from "./Components/Home/Blog.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/currentDigiTeam", element: <CurrentDigiTeam /> },
        { path: "/pastDigiTeam", element: <PastDigiTeam /> },
        { path: "/seniorOfficials", element: <SeniorOfficials /> },
        {
          path: "/clusterHead_DeputyHead",
          element: <ClusterHead_DeputyHead />,
        },
        { path: "/regionChairPerson", element: <RegionChairPerson /> },
        { path: "/zoneChairPerson", element: <ZoneChairPerson /> },
        { path: "/globalCausesTeam", element: <GlobalCausesTeam /> },
        { path: "/digiProgramTeam", element: <DigiProgramTeam /> },
        { path: "/leoDistrict", element: <LeoDistrict /> },
        {path:  "/clubs", element: <Clubs />},
        { path: "/leoClubs", element: <LeoClubs />},
        {path: "/blog", element: <Blog />}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
