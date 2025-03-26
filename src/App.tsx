import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AlumniPage from "./components/alumni/AlumniPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/alumni/*" element={<AlumniPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
