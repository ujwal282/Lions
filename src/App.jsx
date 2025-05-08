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
import Clubs from "./Components/Club/Clubs.jsx";
import LeoClubs from "./Components/Club/LeoClubs.jsx";
import Resources from "./Components/Resources/Resources.jsx";
import Blog from "./Components/Home/Blog.jsx";
import PageNotFound from "./Components/PageNotFound/PageNotFound.jsx";
import LioAi from "./LionAi/LioAi.jsx";
import "./App.css";
import Aside from "./Admin/Navigation/Aside.jsx"
import LineChart from "./Admin/Linechart.jsx";
import Chart from "./Admin/Chart.jsx";
import DetailCard from "./Admin/Navigation/DetailCard.jsx";
import Donation from "./Admin/Donation.jsx";
import Management from "./Admin/Navigation/Management.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
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
        { path: "/clubs", element: <Clubs /> },
        { path: "/leoClubs", element: <LeoClubs /> },
        {path: "/resources", element: <Resources />},
        { path: "/blog", element: <Blog /> },
        {path: "/lio_ai", element: <LioAi />},
        { path: "*", element: <PageNotFound /> },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  // return(
  //   <>
  //   <Aside />
  //   <div>
  //   <div>
        
  //   <DetailCard member={"1,230"} profit={"+12% from last month"} />
  //   <DetailCard member={"1,230"} profit={"+12% from last month"} />
  //   <DetailCard member={"1,230"} profit={"+12% from last month"} />
  //   <DetailCard member={"1,230"} profit={"+12% from last month"} />
  //   <DetailCard member={"1,230"} profit={"+12% from last month"} />
  //   </div>
  //  <div>
  //  <div>
  //  <Chart />
  //  <div>
  //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptatum sed totam! Quo, reprehenderit amet. Rem accusantium possimus minus.</p>
  //  </div>
  //  </div>
  //  <LineChart />
  //  </div>
  //   <Donation />
  //   {/* <Management /> */}
  //   </div>
  //   </>
  
}

export default App;
