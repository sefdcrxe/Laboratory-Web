import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/views/MainPage/MainPage";

function App() {
  const token = localStorage.getItem('accessToken');

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/a" element={<MainPage />} />
          {/* 다른 라우트들 추가 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
