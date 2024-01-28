import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobListing from './pages/JobListing'
import EditJob from "./components/EditJob";
import CreateJob from "./components/CreateJob";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<JobListing />}></Route>
        <Route exact path="/createjob" element={<CreateJob />}></Route>
        <Route exact path="/editjob" element={<EditJob />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;