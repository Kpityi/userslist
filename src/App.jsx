import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./components/pages/UserListPage";
import UserPage from "./components/pages/UserPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
