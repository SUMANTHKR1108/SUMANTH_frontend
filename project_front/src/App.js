import Client from "./component/Client";
import "./App.css";
import Home1 from "./component/Home1";
import Userlogin from "./component/Userlogin";
import Text from "./component/Text";
import RegisterPage from "./component/register/RegistrePage";
import AboutInfo from "./component/about/AboutInfo";
import Contact from "./component/contactInfo/Contact";
import Freelancer from "./component/Freelancer";
import FirstHomePage from "./component/home/FirstHomePage";
import JobApplication from "./component/jobposting/JobApplication";
import JobPostingPage from "./component/Freelancer/JobPostingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplicationsDetails from "./component/Freelancer/ApplicationDetails";
import FreelancerDetails from "./component/Freelancer/FreelancerDetails";

import LogOut from "./component/LogOut";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstHomePage />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Freelancer" element={<Freelancer />} />
          <Route path="/Userlogin" element={<Userlogin />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/Home1" element={<Home1 />} />
          <Route path="/JobPostingPage" element={<JobPostingPage />} />
          <Route path="/AboutInfo" element={<AboutInfo />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Text" element={<Text />} />
          <Route path="/jobApplication" element={<JobApplication />} />
          <Route path="/FreelancerDetails" element={<FreelancerDetails />} />
          <Route path="/ApplicationDetails" element={<ApplicationsDetails />} />
          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
