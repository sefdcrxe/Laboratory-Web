import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/views/MainPage/MainPage";
import MemberPage from "./components/views/MemberPage/MemberPage";
import ProjectPage from "./components/views/ProjectPage/ProjectPage";
import ContactPage from "./components/views/ContactPage/ContactPage";
import DetailProjectPage from "./components/views/ProjectPage/DetailProjectPage";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MemberPage" element={<MemberPage />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/projects/:projectId/*" element={<DetailProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
