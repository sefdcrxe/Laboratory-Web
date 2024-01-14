import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/views/MainPage/MainPage";
import MemberPage from "./components/views/MemberPage/MemberPage";
import ProjectPage from "./components/views/ProjectPage/ProjectPage";
import ContactPage from "./components/views/ContactPage/ContactPage";

function App() {
  const token = localStorage.getItem('accessToken');

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MemberPage" element={<MemberPage />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
